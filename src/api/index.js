import firebase from "firebase";

const config = {
    apiKey: "AIzaSyBMFTWT7g17RCFAOZrKEK7fR4Uxm2csBXU",
    authDomain: "glassesshop63.firebaseapp.com",
    databaseURL: "https://glassesshop63.firebaseio.com",
    projectId: "glassesshop63",
    storageBucket: "glassesshop63.appspot.com",
    messagingSenderId: "161475988554",
    appId: "1:161475988554:web:ba69f6f68c5214d028eab3"
};

firebase.initializeApp(config);
const db = firebase.firestore();
const auth = firebase.auth();

export const itemsAPI = {
    getItems() {
        return db.collection("items").get().then(data => data.docs.map(doc => ({...doc.data()})));
    },
    addCart(item) {
        return db.collection("cart").add(item).then(() => item);
    }
};

export const authAPI = {
    login(email, password) {
        return auth.signInWithEmailAndPassword(email, password);
    },
    register(email, password) {
        return auth.createUserWithEmailAndPassword(email, password);
    },
    logout() {
        return auth.signOut();
    },
    anonymousLogin() {
        return auth.signInAnonymously();
    }
}


export default firebase;