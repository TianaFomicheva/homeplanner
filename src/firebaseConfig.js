import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/messaging'
import 'firebase/storage'
import { initializeApp } from "firebase/app";
const firebaseConfig = {
    
        apiKey: "AIzaSyAj2XssNH4uRUh64bNC3C4QoxCOqZdmfBU",
        authDomain: "homeplanner-56f2c.firebaseapp.com",
        projectId: "homeplanner-56f2c",
        storageBucket: "homeplanner-56f2c.appspot.com",
        messagingSenderId: "645360223440",
        appId: "1:645360223440:web:d762bc61de9cd668a20ad5",
        measurementId: "G-4LBTJZHCX0"
    
}

export default firebase.initializeApp(firebaseConfig)