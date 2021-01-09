import firebase from "firebase/app";
import 'firebase/database'

var firebaseConfig = {
  apiKey: "AIzaSyDp_DPPVC1hqS_l_-yyxPfBybuStHzwrH0",
  authDomain: "landingpage-c6ccb.firebaseapp.com",
  projectId: "landingpage-c6ccb",
  storageBucket: "landingpage-c6ccb.appspot.com",
  messagingSenderId: "926450423031",
  appId: "1:926450423031:web:ac8e9efa2a44e0ec492ff2"
};
// Initialize Firebase
var firebaseDb = firebase.initializeApp(firebaseConfig);
export default firebaseDb