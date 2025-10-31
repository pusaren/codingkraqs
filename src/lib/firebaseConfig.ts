// src/lib/firebaseConfig.ts
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// ✅ Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpRM_HCXA4jX3E1djQhchnaKsj0CWUies",
  authDomain: "codingkraqs-e1425.firebaseapp.com",
  projectId: "codingkraqs-e1425",
  storageBucket: "codingkraqs-e1425.appspot.com",
  messagingSenderId: "660978109425",
  appId: "1:660978109425:web:d47a58442920c99c675250",
};

// ✅ Initialize app safely
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// ✅ Export Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
