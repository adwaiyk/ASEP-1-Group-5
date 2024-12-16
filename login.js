import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-analytics.js";

const firebaseConfig = {
    apiKey: "AIzaSyAqwBvuNnD7vOKbRmDDQ9fINY4OtJ6r930",
    authDomain: "aerozen-cbc01.firebaseapp.com",
    projectId: "aerozen-cbc01",
    storageBucket: "aerozen-cbc01.firebasestorage.app",
    messagingSenderId: "214507255290",
    appId: "1:214507255290:web:08f92732d57d9e9f6b6043",
    measurementId: "G-0SEEWL7PKB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const analytics = getAnalytics(app);

// Ensure the submit button is defined before adding the event listener
const submit = document.getElementById("submit");

submit.addEventListener('click', function (event) {
    event.preventDefault();

    // Input Fields
    const username = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            setDoc(doc(db, "users", user.uid), {
                email: user.email,
                uid: user.uid,
                displayName: username,
            })
                .then(() => {
                    alert("Account created. Please verify your email before logging in.");
                    window.location.href = "index.html";
                })
                .catch((error) => {
                    console.error("Error writing document: ", error);
                    alert("Error writing document: " + error.message);
                });
        })
        .catch((error) => {
            console.error("Error creating user: ", error);
            alert("Error creating user: " + error.message);
        });
});