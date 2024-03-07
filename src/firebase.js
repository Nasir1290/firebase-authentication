// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA76mSAbIxy4QdtR44sumBxZR8TiW-XpUI",
    authDomain: "guestbook-32540.firebaseapp.com",
    projectId: "guestbook-32540",
    storageBucket: "guestbook-32540.appspot.com",
    messagingSenderId: "517011187278",
    appId: "1:517011187278:web:002b6405eaefb89a65c51f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const registerWithEmailAndPassword = async (email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        return user;
    } catch (err) {
        throw err;
    }
}

const loginWthEmailAndPassword = async (email, password) => {
    try {
        const res = await signInWithEmailAndPassword(auth, email, password);
        const user = res.user;
        return user;
    } catch (err) {
        throw err;
    }
}


export { registerWithEmailAndPassword ,loginWthEmailAndPassword};