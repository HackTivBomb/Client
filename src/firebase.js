import {intializeApp} from 'firebase'

  // Initialize Firebase
  const app = intializeApp({
    apiKey: "AIzaSyAvoE1-DOqRs97t6-yCwaFJAGE7xFfQeUs",
    authDomain: "hacktivbomb.firebaseapp.com",
    databaseURL: "https://hacktivbomb.firebaseio.com",
    projectId: "hacktivbomb",
    storageBucket: "hacktivbomb.appspot.com",
    messagingSenderId: "896957874420"
  })
  export const db = app.database();
  export const hacktivbomb = db.ref('hacktivbomb');