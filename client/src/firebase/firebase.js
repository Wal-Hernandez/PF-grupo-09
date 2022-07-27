// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCayB8IYAMUoSzerxsgj-NPEf0-n4LRSvM",
  authDomain: "login-pf-henry.firebaseapp.com",
  projectId: "login-pf-henry",
  storageBucket: "login-pf-henry.appspot.com",
  messagingSenderId: "1020370971844",
  appId: "1:1020370971844:web:c427bb231cf7198075ad91",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
