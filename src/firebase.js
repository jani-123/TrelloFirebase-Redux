import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyCV5LmGqrdbiwTq4jf0oodq34POi8LGBSE",
    authDomain: "trello-database.firebaseapp.com",
    databaseURL: "https://trello-database.firebaseio.com",
    projectId: "trello-database",
    storageBucket: "trello-database.appspot.com",
    messagingSenderId: "19412961693"
  };
  firebase.initializeApp(config);

  export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const storage = firebase.storage();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();