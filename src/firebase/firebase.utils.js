import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
        apiKey: "AIzaSyB_UTrKsVkmHpz9INQKulJXM_lkUGgex4A",
        authDomain: "mkb-db-acd82.firebaseapp.com",
        projectId: "mkb-db-acd82",
        storageBucket: "mkb-db-acd82.appspot.com",
        messagingSenderId: "523197955953",
        appId: "1:523197955953:web:44d0492b928426f365c0d0",
        measurementId: "G-9ZXNV3XJHR"    
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
   if(!userAuth) return;

   const userRef = firestore.doc(`users/${userAuth.uid}`);

   const snapShot = await userRef.get();

   if(!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
          await userRef.set({
             displayName,
             email,
             createdAt,
             ...additionalData
          })
      } catch (error) {
          console.log('error creating user', error.message);
      }
   }

   return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
