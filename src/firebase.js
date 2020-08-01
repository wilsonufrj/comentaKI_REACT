import firebase from 'firebase/app'
import 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyARbmRoQkyC97xVOkISO6pu_JagGsVSqH4",
    authDomain: "comentaki-236a9.firebaseapp.com",
    databaseURL: "https://comentaki-236a9.firebaseio.com",
    projectId: "comentaki-236a9",
    storageBucket: "comentaki-236a9.appspot.com",
    messagingSenderId: "1027550070948",
    appId: "1:1027550070948:web:df82322fe8c8ab9f667e31"
  }

firebase.initializeApp(firebaseConfig)

export default firebase