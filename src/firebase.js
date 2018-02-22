// import firebase from 'firebase'
import { initializeApp } from 'firebase'
// Initialize Firebase
const app = initializeApp({
  apiKey: 'AIzaSyAvoE1-DOqRs97t6-yCwaFJAGE7xFfQeUs',
  authDomain: 'hacktivbomb.firebaseapp.com',
  databaseURL: 'https://hacktivbomb.firebaseio.com',
  projectId: 'hacktivbomb',
  storageBucket: 'hacktivbomb.appspot.com',
  messagingSenderId: '896957874420'
})
// firebase.initializeApp(config)

export const db = app.database()
export const users = db.ref('users')
export const rooms = db.ref('room')
