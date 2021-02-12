import app from "firebase/app";
import "firebase/firestore"

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyAJOLu545D876j-p98RJH7b0CYAAreDBus",
    authDomain: "job-search-a3d21.firebaseapp.com",
    projectId: "job-search-a3d21",
    storageBucket: "job-search-a3d21.appspot.com",
    messagingSenderId: "1035405075398",
    appId: "1:1035405075398:web:62bdb5b81e231057d3c8c7",
    measurementId: "G-BQMH1G0JFV"
};
// Initialize Firebase
const firebase = app.initializeApp(firebaseConfig);
const firestore = firebase.firestore();


export { firebase, firestore, app };