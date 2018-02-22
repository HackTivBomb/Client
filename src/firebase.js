import firebase from 'firebase'

// Initialize Firebase
const config = {
  apiKey: 'AIzaSyAvoE1-DOqRs97t6-yCwaFJAGE7xFfQeUs',
  authDomain: 'hacktivbomb.firebaseapp.com',
  databaseURL: 'https://hacktivbomb.firebaseio.com',
  projectId: 'hacktivbomb',
  storageBucket: 'hacktivbomb.appspot.com',
  messagingSenderId: '896957874420'
}
firebase.initializeApp(config)
