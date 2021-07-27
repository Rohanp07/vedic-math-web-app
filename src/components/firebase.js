// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseApp =firebase.initializeApp({

    apiKey: "AIzaSyC3xi4T7_1qjtHkRgg3kns6ILQP2zrpyVU",
    authDomain: "vedic-math-web-app.firebaseapp.com",
    projectId: "vedic-math-web-app",
    storageBucket: "vedic-math-web-app.appspot.com",
    messagingSenderId: "1001245530395",
    appId: "1:1001245530395:web:251347b39ef7e8fad75bbe",
    measurementId: "G-K8SEYCWG70"
});


  const fire = firebaseApp.firestore();
  export default fire;