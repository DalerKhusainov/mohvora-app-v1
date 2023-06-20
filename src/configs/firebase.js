import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDE6toKqet8dGPED23gZHAr_lQ4oQUD-0k",
  authDomain: "hamroh-app-v2.firebaseapp.com",
  projectId: "hamroh-app-v2",
  storageBucket: "hamroh-app-v2.appspot.com",
  messagingSenderId: "431651150124",
  appId: "1:431651150124:web:a044b3ee9f9f909148f489",
  measurementId: "G-8M2QHEH4LC",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const storage = getStorage();
export const db = getFirestore(app);
