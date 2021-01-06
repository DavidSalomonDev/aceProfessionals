import firebase from "firebase";

var firebaseConfig = {

    apiKey: "AIzaSyAi5Quz6xirj0P5c9MveL5HsCg_w8ZC54w",
    authDomain: "landing-page-2c423.firebaseapp.com",
    databaseURL: "https://landing-page-2c423-default-rtdb.firebaseio.com",
    projectId: "landing-page-2c423",
    storageBucket: "landing-page-2c423.appspot.com",
    messagingSenderId: "239038446827",
    appId: "1:239038446827:web:1293d7f9e259472cfa12ae",
    measurementId: "G-QLRTZYQ0MR"
  };
  // Initialize Firebase
  var firebaseDb= firebase.initializeApp(firebaseConfig);
  export default firebaseDb