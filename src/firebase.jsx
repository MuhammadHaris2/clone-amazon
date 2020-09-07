import firebase from 'firebase';
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAXSwap5L7Ejp8AX4ymwL-MY2hv_yD1Vig",
    authDomain: "clone-99b48.firebaseapp.com",
    databaseURL: "https://clone-99b48.firebaseio.com",
    projectId: "clone-99b48",
    storageBucket: "clone-99b48.appspot.com",
    messagingSenderId: "322962261953",
    appId: "1:322962261953:web:0ffb5e305fcbf48d6e1140",
    measurementId: "G-KXRF6L99LQ"
})

const db = firebaseApp.firestore();
const auth = firebase.auth();
export {db , auth};