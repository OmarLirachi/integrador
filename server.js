import express from 'express'
import bcrypt from 'bcrypt'
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwPNt4kpTZYU_C__ibHBdx2uhCq2JOO2Y",
  authDomain: "integrador-3c2a5.firebaseapp.com",
  projectId: "integrador-3c2a5",
  storageBucket: "integrador-3c2a5.appspot.com",
  messagingSenderId: "104808837991",
  appId: "1:104808837991:web:0a825f298fee2d9df635c2"
}

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
const db = getFirestore()

//iniciar server
const app = express()

//iniciar middleware
app.use(express.static('public'))
app.use(express.json())

//rutas del backend
//ruta home
app.get('/', (req, res) =>{
    res.sendFile('index.html', {root: 'public'})
})

// Arrancamos el server
const Port = process.env.PORT || 5000
app.listen(Port, () => {
    console.log(`Server in Port: ${Port}`)
})