import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

firebase.initializeApp({
  apiKey: 'AIzaSyAbZcRsVANNAQjGLMS8PkW9V_1XeXxiZRY',
  authDomain: 'crwn-db-c0ad4.firebaseapp.com',
  databaseURL: 'https://crwn-db-c0ad4.firebaseio.com',
  projectId: 'crwn-db-c0ad4',
  storageBucket: '',
  messagingSenderId: '681272031383',
  appId: '1:681272031383:web:632fcaa7c1ae5547'
});

export const firestore = firebase.firestore();

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) {
    return;
  }

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({ displayName, email, createdAt, ...additionalData });
    } catch (err) {
      console.log('error creating user', err.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
