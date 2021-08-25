import firebase from "firebase/app"
import "firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyAvRyty3CtVDWgxTxMc1wP9YMLuAV0Y-bc",
    authDomain: "itemlistclothes.firebaseapp.com",
    projectId: "itemlistclothes",
    storageBucket: "itemlistclothes.appspot.com",
    messagingSenderId: "35875325256",
    appId: "1:35875325256:web:00de9c54099cb00707df7d"
  };
  
  const app = firebase.initializeApp(firebaseConfig);

  export function getFirebase() {
      return app;
  }

  export const database = firebase.firestore();