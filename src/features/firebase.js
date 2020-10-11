import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCszLUBG6bMFGM63mbTt037Eco5aGcGbFo",
    authDomain: "discord-clone-6e4b5.firebaseapp.com",
    databaseURL: "https://discord-clone-6e4b5.firebaseio.com",
    projectId: "discord-clone-6e4b5",
    storageBucket: "discord-clone-6e4b5.appspot.com",
    messagingSenderId: "914400009245",
    appId: "1:914400009245:web:f905ac85d1ee2a34d17af4",
    measurementId: "G-X9HYTMLXCL"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;