import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyC8e3Mkn5UMUnA0ZHj2TrBQ1i6WTMSGhi0",
  authDomain: "crwnclothing-7a3f3.firebaseapp.com",
  databaseURL: "https://crwnclothing-7a3f3.firebaseio.com",
  projectId: "crwnclothing-7a3f3",
  storageBucket: "crwnclothing-7a3f3.appspot.com",
  messagingSenderId: "749206675559",
  appId: "1:749206675559:web:022d7249691f8dc5a174c2",
  measurementId: "G-48WLDEKPE9"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user: ", error);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
