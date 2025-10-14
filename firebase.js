<script type="module">
// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBOIyyPWVXWq0X3btLYM4PFaaadZuXW3pU",
    authDomain: "clientes-c459e.firebaseapp.com",
    databaseURL: "https://clientes-c459e-default-rtdb.firebaseio.com",
    projectId: "clientes-c459e",
    storageBucket: "clientes-c459e.firebasestorage.app",
    messagingSenderId: "347844392001",
    appId: "1:347844392001:web:9e0a836d313959d0e742c0",
    measurementId: "G-2QFH1EESNC"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
</script>