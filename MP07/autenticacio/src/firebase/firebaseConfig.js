// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAU8AwpXyshsGyWUbSGpDOcef1xCg3aH3A",
  authDomain: "autenticacion-bd80a.firebaseapp.com",
  projectId: "autenticacion-bd80a",
  storageBucket: "autenticacion-bd80a.firebasestorage.app",
  messagingSenderId: "159710452043",
  appId: "1:159710452043:web:71386b089715d3372df0ce",
  measurementId: "G-1GV8S2PEPB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Inicialitza el servei d'autenticació i l'exporta per utilitzar-lo en altres parts de l'aplicació
export const auth = getAuth(app);

// Exporta l'aplicació Firebase inicialitzada
export default app;
