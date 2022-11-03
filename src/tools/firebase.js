import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDwnA63pNfzExd5S4X8-sx4ahCWyik-TEs',
  authDomain: 'e-comm-8bdb4.firebaseapp.com',
  projectId: 'e-comm-8bdb4',
  storageBucket: 'e-comm-8bdb4.appspot.com',
  messagingSenderId: '770298920424',
  appId: '1:770298920424:web:c94977b968341a7c85b85d',
  measurementId: 'G-XR2Z376GJC'
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
