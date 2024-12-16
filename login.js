import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyAqwBvuNnD7vOKbRmDDQ9fINY4OtJ6r930",
    authDomain: "aerozen-cbc01.firebaseapp.com",
    projectId: "aerozen-cbc01",
    storageBucket: "aerozen-cbc01.firebasestorage.app",
    messagingSenderId: "214507255290",
    appId: "1:214507255290:web:08f92732d57d9e9f6b6043",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Handle form submission
document.getElementById("signup-form").addEventListener("submit", async (event) => {
    event.preventDefault();

    const username = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        await setDoc(doc(db, "users", user.uid), {
            email: user.email,
            uid: user.uid,
            displayName: username,
        });

        alert("Account created successfully! Please verify your email.");
        window.location.href = "index.html";
    } catch (error) {
        console.error("Error:", error);
        alert(error.message);
    }
});
