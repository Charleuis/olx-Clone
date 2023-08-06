import firebase from "firebase/app"
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyAVVfmShudvbA1y36sn5EE9XBaGSRT0_-U",
    authDomain: "olx-clone-fa5ec.firebaseapp.com",
    projectId: "olx-clone-fa5ec",
    storageBucket: "olx-clone-fa5ec.appspot.com",
    messagingSenderId: "38668210857",
    appId: "1:38668210857:web:ef1faefa8efa6e85c78fb8",
    measurementId: "G-CH56DQFEW6"
  };
   
export default firebase.initializeApp(firebaseConfig)