import { initializeApp } from "firebase/app";
import { getVertexAI, getGenerativeModel } from "firebase/vertexai";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBoktzZCUr6GrTPRelmckWUFYVYZItsofk",
  authDomain: "picprice-73be9.firebaseapp.com",
  projectId: "picprice-73be9",
  storageBucket: "picprice-73be9.firebasestorage.app",
  messagingSenderId: "516617791259",
  appId: "1:516617791259:web:ba3222825cfc8e75bd55be",
  measurementId: "G-7XHDP0EEF9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const vertexAI = getVertexAI(app);
export const auth = getAuth(app)
export const db = getFirestore(app)

export const geminiModel = getGenerativeModel(vertexAI, { model: "gemini-2.0-flash" });