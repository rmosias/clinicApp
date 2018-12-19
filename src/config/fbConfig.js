import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

  const config = {
    apiKey: "AIzaSyBVYYVj-BCckqutKqwGtO9w7yxP44h0Yo8",
    authDomain: "clinic-6be0c.firebaseapp.com",
    databaseURL: "https://clinic-6be0c.firebaseio.com",
    projectId: "clinic-6be0c",
    storageBucket: "clinic-6be0c.appspot.com",
    messagingSenderId: "443382266538"
  };
  firebase.initializeApp(config);
  firebase.firestore().settings({timestampsInSnapshots: true})
  
export default firebase;