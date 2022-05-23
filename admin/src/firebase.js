import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyADOs0cePTl-UobPMphhljnRoNQ111Tpio",
  authDomain: "movies-a94c1.firebaseapp.com",
  projectId: "movies-a94c1",
  storageBucket: "movies-a94c1.appspot.com",
  messagingSenderId: "400304931451",
  appId: "1:400304931451:web:e25a0fb706381589db58de",
  measurementId: "G-TH39KB4E50"
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;
