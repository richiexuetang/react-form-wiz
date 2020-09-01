import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyB0ugIYhdGAtvUtPlFxYveqEvU0LXmaACY",
    authDomain: "ecommerce-db-656b3.firebaseapp.com",
    databaseURL: "https://ecommerce-db-656b3.firebaseio.com",
    projectId: "ecommerce-db-656b3",
    storageBucket: "ecommerce-db-656b3.appspot.com",
    messagingSenderId: "1074617789877",
    appId: "1:1074617789877:web:393358e0aba58c26373dfc",
    measurementId: "G-4E272BR26Q"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;