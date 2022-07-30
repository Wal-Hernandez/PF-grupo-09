// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAl3IKzvdAwLRdC0MxO1xGxOfMSYLqiXEE",
  authDomain: "login-pf-2.firebaseapp.com",
  projectId: "login-pf-2",
  storageBucket: "login-pf-2.appspot.com",
  messagingSenderId: "775774192374",
  appId: "1:775774192374:web:7da1432ab5c8dcddd862d7",
  measurementId: "G-GLPX0WFC7D"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);