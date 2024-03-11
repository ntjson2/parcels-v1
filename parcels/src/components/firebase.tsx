 // Import the functions you need from the SDKs you need
 import { initializeApp } from "firebase/app";
 import { getFirestore } from "firebase/firestore";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries


 const firebaseConfig = {
    apiKey: "AIzaSyCgDHs-eIwf4UPo-kkUyhlNqNgFBO6c9GI",
    authDomain: "ntjsonn.firebaseapp.com",
    projectId: "ntjsonn",
    storageBucket: "ntjsonn.appspot.com",
    messagingSenderId: "821593098629",
    appId: "1:821593098629:web:1672ef0e98b40eb30b5cec",
    measurementId: "G-4CDNHB5CZ1"
  };
 // Initialize Firebase
 
 const app = initializeApp(firebaseConfig);
 // Export firestore database
 // It will be imported into your react app whenever it is needed
 // export const db = getFirestore(app);
 export default getFirestore(app);