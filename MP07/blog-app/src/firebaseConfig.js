import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
 
const firebaseConfig = {
    apiKey: "AIzaSyAU8AwpXyshsGyWUbSGpDOcef1xCg3aH3A",
    authDomain: "autenticacion-bd80a.firebaseapp.com",
    projectId: "autenticacion-bd80a",
    storageBucket: "autenticacion-bd80a.firebasestorage.app",
    messagingSenderId: "159710452043",
    appId: "1:159710452043:web:71386b089715d3372df0ce",
    measurementId: "G-1GV8S2PEPB"
};
 
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
