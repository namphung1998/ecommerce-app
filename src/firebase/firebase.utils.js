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

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
