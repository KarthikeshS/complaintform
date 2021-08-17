import *as firebase from 'firebase'
require("@firebase/firestore")

var firebaseConfig = {
 //Add configuration here
  apiKey: "AIzaSyAIGStaqnWNuxFF-gfgxeRUwCjRuY6coSg",
  authDomain: "complaint-letter.firebaseapp.com",
  projectId: "complaint-letter",
  storageBucket: "complaint-letter.appspot.com",
  messagingSenderId: "149842437904",
  appId: "1:149842437904:web:1e8cb95a55f965ef1ce795" 
};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

