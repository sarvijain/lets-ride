import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
 //Add configuration here
 
  apiKey: "AIzaSyCg0SIRTUwuP_NesCA7i9nO_-ZGjwRMfJM",
  authDomain: "let-s-ride-a4d59.firebaseapp.com",
  projectId: "let-s-ride-a4d59",
  storageBucket: "let-s-ride-a4d59.appspot.com",
  messagingSenderId: "170663957907",
  appId: "1:170663957907:web:2d18e8e344bdf8da224466"

 
};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

