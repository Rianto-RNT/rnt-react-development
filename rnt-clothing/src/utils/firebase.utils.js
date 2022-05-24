import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCKYrnV6kCA1UmLxNttbs5xZ0AMfgCC_Os",
  authDomain: "rnt-react-ecommerce.firebaseapp.com",
  projectId: "rnt-react-ecommerce",
  storageBucket: "rnt-react-ecommerce.appspot.com",
  messagingSenderId: "304645897717",
  appId: "1:304645897717:web:b0771ece99631ea73c74bc",
  measurementId: "G-Y8M3YMH8G5",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
