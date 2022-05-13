// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, enableIndexedDbPersistence, CACHE_SIZE_UNLIMITED, initializeFirestore} from "firebase/firestore"
import { getAuth, GoogleAuthProvider} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAtfA1CP-ad1fsyKy8QNQy8AQztStNhNMU",
  authDomain: "l2ranking-8937e.firebaseapp.com",
  projectId: "l2ranking-8937e",
  storageBucket: "l2ranking-8937e.appspot.com",
  messagingSenderId: "913867872991",
  appId: "1:913867872991:web:2dec6746930aedaa98a76a",
  measurementId: "G-1800R1Z8FD",
  cacheSizeBytes: CACHE_SIZE_UNLIMITED
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()
export const analytics = getAnalytics(app);
export const db = getFirestore()  //db ini
 

enableIndexedDbPersistence(db)
  .catch((err) => {
      if (err.code == 'failed-precondition') {
          // Multiple tabs open, persistence can only be enabled
          // in one tab at a a time.
          // ...
      } else if (err.code == 'unimplemented') {
          // The current browser does not support all of the
          // features required to enable persistence
          // ...
      }
  });

 
