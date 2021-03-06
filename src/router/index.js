import Vue from "vue";
import Router from "vue-router";
import firebase from "firebase";

import Map from "@/components/home/Map";
import Signup from "../components/auth/Signup.vue";
import Login from "../components/auth/Login.vue";
import ViewProfile from "../components/profile/ViewProfile.vue";

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/",
      name: "Map",
      component: Map,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/signup",
      name: "Signup",
      component: Signup
    },
    {
      path: "/login",
      name: "Login",
      component: Login
    },
    {
      path: "/profile/:id",
      name: "ViewProfile",
      component: ViewProfile,
      meta: {
        requiresAuth: true
      }
    }
  ]
});
//fires a function before each route is loaded in
router.beforeEach((to, from, next) => {
  //check to see if route requires auth
  if (to.matched.some(rec => rec.meta.requiresAuth)) {
    //check for state of use
    let user = firebase.auth().currentUser;
    if (user) {
      //if user signed in proceed to route
      next();
    } else {
      //no user signed in , redirect to login

      next({ name: "Login" });
    }
  } else {
    next();
  }
});

export default router;
