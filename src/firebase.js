import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyDB6LzZYT0DjvY8VXHMNH4dBdIUhe2G7v0",
  authDomain: "landingpage-16d6a.firebaseapp.com",
  databaseURL: "https://landingpage-16d6a-default-rtdb.firebaseio.com",
  projectId: "landingpage-16d6a",
  storageBucket: "landingpage-16d6a.appspot.com",
  messagingSenderId: "429257041502",
  appId: "1:429257041502:web:d2b283937cfd31eab636cf"
};
  // Initialize Firebase
  var firebaseDb= firebase.initializeApp(firebaseConfig);
  export default firebaseDb