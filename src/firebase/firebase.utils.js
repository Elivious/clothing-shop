import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyAhxFXHUrB5RAgRb4iuIG5UZ5jOjy4F5ME",
    authDomain: "crwn-db-92348.firebaseapp.com",
    projectId: "crwn-db-92348",
    storageBucket: "crwn-db-92348.appspot.com",
    messagingSenderId: "589087032565",
    appId: "1:589087032565:web:0e2687b6782df10fe5f1bc",
    measurementId: "G-JBXVCR9TR0"
  };

  export const createUserProfileDocument = async(userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists){
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch(error){
        console.log('error creating user', error.message);
      }
    }

    return userRef;
  }

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;