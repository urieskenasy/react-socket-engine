const { initializeApp } = require("firebase/app");
const {
    getFirestore,
    collection,
    addDoc,
    getDoc,
    updateDoc,
    doc,
} = require("firebase/firestore");
const { getAuth } = require("firebase/auth");

const firebaseConfig = {
    apiKey: "AIzaSyAibWkuGjiJ5ngOcKfThSuBLWb4ZH4Ph3Y",

    authDomain: "hobbyt-6b5c6.firebaseapp.com",

    projectId: "hobbyt-6b5c6",

    storageBucket: "hobbyt-6b5c6.appspot.com",

    messagingSenderId: "842001819775",

    appId: "1:842001819775:web:a43733d4731f98d19e774a",

    measurementId: "G-S80VK4QBKS",
};

// init firebase
initializeApp(firebaseConfig);

// init services
const db = getFirestore();
const auth = getAuth();

// collection ref
const chatRef = collection(db, "chats");

const app = require("express")();
const http = require("http").createServer(app);
const io = require("socket.io")(http, { cors: { origin: "*" } });
const PORT = process.env.PORT || 5000;
http.listen(PORT, function () {
    console.log("listening on *:5000");
    io.on("connection", (socket) => {
        const id = socket.handshake.query.id;
        socket.join(id);

        socket.on("join_room", async (data) => {
            // const chatSnapShot = await getDoc(chatRef);
            // if (chatSnapShot.exists()) {
            //
            // } else {
            //     throw new Error("chat could not log");
            // }
            const docRef = await addDoc(chatRef, { ...data, messages: [] });
            socket.join(data);
            console.log(data);
            console.log(docRef);
        });

        socket.on("send_message", async (data) => {
            const message = doc(db, "chats", "4EGssmpdmr5IHuB1ro5h");
            console.log(message);
            const ref = await updateDoc(chatRef, {});
        });
    });
});
