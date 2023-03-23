import { createGlobalState } from '@vueuse/core'
import {  getDatabase, set, get, ref, push, remove } from "firebase/database"

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAj2XssNH4uRUh64bNC3C4QoxCOqZdmfBU",
  authDomain: "homeplanner-56f2c.firebaseapp.com",
  projectId: "homeplanner-56f2c",
  storageBucket: "homeplanner-56f2c.appspot.com",
  messagingSenderId: "645360223440",
  appId: "1:645360223440:web:d762bc61de9cd668a20ad5",
  measurementId: "G-4LBTJZHCX0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app)

async function getData() {
  const a =  await get(ref(db), 'todofast').then((snapshot) => {
    if (snapshot.exists()) {
      return Object.assign({}, snapshot.val())
    } else {
      console.log("No data available");
    }
  }).catch((error) => {
    console.error(error);
  });;
  console.log(a)
return a
}

export const addData = async (table, data) =>{
  const field = push(ref(db, table))
  const key = field.key
  set(field, {...data, id: key});
}
export const editData = async (path, data) =>{
  set(ref(db, path), {...data});
}
export const removeData = async (path, data) =>{
  console.log(path)
  remove(ref(db, path));
}


export const useGlobalState =  createGlobalState(
    async () => 
       await getData()               
    
)
