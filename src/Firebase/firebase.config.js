// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {

  apiKey: "AIzaSyBsahXIJZ7qTQVlZ_4Jag1qexp5ryDNMfk",
  authDomain: "mukto-chitro.firebaseapp.com",
  projectId: "mukto-chitro",
  storageBucket: "mukto-chitro.appspot.com",
  messagingSenderId: "593950406693",
  appId: "1:593950406693:web:4765e575ce9ac91c4aa7cc"


  // apiKey:process.env.REACT_APP_apiKey,
  // authDomain:process.env.REACT_APP_authDomain,
  // projectId:process.env.REACT_APP_projectId,
  // storageBucket:process.env.REACT_APP_storageBucket,
  // messagingSenderId:process.env.REACT_APP_messagingSenderId,
  // appId:process.env.REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;