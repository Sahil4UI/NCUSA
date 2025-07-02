// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp, type FirebaseApp } from "firebase/app";
import { getAnalytics, type Analytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDIBOk-SVUM9ECRsuiD3ue0VmRWHDpKyjU",
  authDomain: "ncusa-8f02c.firebaseapp.com",
  projectId: "ncusa-8f02c",
  storageBucket: "ncusa-8f02c.firebasestorage.app",
  messagingSenderId: "203910174209",
  appId: "1:203910174209:web:928f901ae9e462046d1200",
  measurementId: "G-H472YXMC1L"
};

// Initialize Firebase
const app: FirebaseApp = !getApps().length ? initializeApp(firebaseConfig) : getApp();
let analytics: Analytics | null = null;

if (typeof window !== 'undefined') {
  analytics = getAnalytics(app);
}

export { app, analytics };
