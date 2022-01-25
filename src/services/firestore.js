// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from 'firebase/firestore/lite';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyCVhX1GmiQ3TDITMK9DgKtwBDfbyGsEWBA',
    authDomain: 'ecommerce-gonzalez.firebaseapp.com',
    projectId: 'ecommerce-gonzalez',
    storageBucket: 'ecommerce-gonzalez.appspot.com',
    messagingSenderId: '747551836897',
    appId: '1:747551836897:web:1b7fda97a05410118285a0',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default getFirestore(app);
