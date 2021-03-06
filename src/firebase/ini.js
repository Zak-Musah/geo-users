import firebase from "firebase";
import firestore from "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyCbKL9qcu7wxrQXki3z-nBVMra1tjSjSGI",
  authDomain: "geo-users-7f204.firebaseapp.com",
  projectId: "geo-users-7f204",
  storageBucket: "geo-users-7f204.appspot.com",
  messagingSenderId: "700287826216",
  appId: "1:700287826216:web:460016520a7f81d14a781d"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();
