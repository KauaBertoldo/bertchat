import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore"


const firebaseConfig = {
apiKey: "AIzaSyDD_uNbU-JGrtXGewYTP3G596nxakPbwRY",
authDomain: "chatfatec-494ee.firebaseapp.com",
projectId: "chatfatec-494ee",
storageBucket: "chatfatec-494ee.appspot.com",
messagingSenderId: "305460103769",
appId: "1:305460103769:web:e38bf7e49c5bdf55543f48",
};


const app = firebase.initializeApp(firebaseConfig);

const db= app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {db, auth, provider};