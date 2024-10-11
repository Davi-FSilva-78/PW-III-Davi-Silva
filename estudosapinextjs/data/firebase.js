import firebase from 'firebase/app';
import getFirestore from 'firebase/firestore'


// Configurações do Firebase (substitua pelos seus valores)
const firebaseConfig = {
    apiKey: "AIzaSyAi8OIFjk2ACT4yMvruosIqNJu8J_VXEsM",
    authDomain: "meuprimeirofirebase-40b37.firebaseapp.com",
    projectId: "meuprimeirofirebase-40b37",
    storageBucket: "meuprimeirofirebase-40b37.appspot.com",
    messagingSenderId: "314153310641",
    appId: "1:314153310641:web:32690b99277704e1698590"
};

// Inicialize o Firebase antes de qualquer uso
const app = firebase.initializeApp(firebaseConfig);

const db = getFirestore(app);


export default db;