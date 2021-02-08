import app from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/firestore";
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyA1701azajT6PMDcYuL3ah2GGhemEaXGlM",
    authDomain: "secondlife-c3cb9.firebaseapp.com",
    projectId: "secondlife-c3cb9",
    storageBucket: "secondlife-c3cb9.appspot.com",
    messagingSenderId: "139685353383",
    appId: "1:139685353383:web:713836498953c7cb858882"
};

class Firebase {
    constructor() {
        app.initializeApp(firebaseConfig);
        this.auth = app.auth();
        this.db = firebase.firestore();
    }
    doCreateUserWithEmailAndPassword = (email, password) =>
        this.auth.createUserWithEmailAndPassword(email, password);
    doSignInWithEmailAndPassword = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password);
    doSignOut = () => this.auth.signOut();
    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
    doPasswordUpdate = password => this.auth.currentUser.updatePassword(password);

    // *** User API ***

    user = uid => this.db.ref(`users/${uid}`);

    users = () => this.db.ref('users');

}
export default Firebase;