// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyC97uIBP8tEy0BmUgQ1pOgOSUYfgBW_wLk',
  authDomain: 'warzone-2-6416c.firebaseapp.com',
  projectId: 'warzone-2-6416c',
  storageBucket: 'warzone-2-6416c.appspot.com',
  messagingSenderId: '789140469371',
  appId: '1:789140469371:web:a59b0384c1dfd0707094de',
  measurementId: 'G-791HQF4K2Q',
  databaseURL:
    'https://warzone-2-6416c-default-rtdb.europe-west1.firebasedatabase.app/',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
