const { initializeApp } = require("firebase/app");
const {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
} = require("firebase/auth");
const { getFirestore, doc, getDoc, setDoc } = require("firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyAibWkuGjiJ5ngOcKfThSuBLWb4ZH4Ph3Y",

    authDomain: "hobbyt-6b5c6.firebaseapp.com",

    projectId: "hobbyt-6b5c6",

    storageBucket: "hobbyt-6b5c6.appspot.com",

    messagingSenderId: "842001819775",

    appId: "1:842001819775:web:a43733d4731f98d19e774a",

    measurementId: "G-S80VK4QBKS",
};

// Initialize Firebase

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const createChat = (data) => {
    const ref = doc(db, "chats", data);
};

module.exports = {
    createChat,
};
