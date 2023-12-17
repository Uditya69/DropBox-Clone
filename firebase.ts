// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADhQer5ksR5e18i54I_TZil2NU2X2-TXs",
  authDomain: "dropbox-clone-f45d2.firebaseapp.com",
  projectId: "dropbox-clone-f45d2",
  storageBucket: "dropbox-clone-f45d2.appspot.com",
  messagingSenderId: "1012307463520",
  appId: "1:1012307463520:web:92b6928b00a8ec0bfc6205"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db= getFirestore(app);
const storage =getStorage(app);
export{db,storage}
