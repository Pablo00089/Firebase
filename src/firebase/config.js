import firebase from "firebase/app"
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBkRSww5NH8PHpm4tDTljgsadVN2EBrpd0",
    authDomain: "my-first-database-7e120.firebaseapp.com",
    projectId: "my-first-database-7e120",
    storageBucket: "my-first-database-7e120.appspot.com",
    messagingSenderId: "104003917148",
    appId: "1:104003917148:web:98c78388e7a1f22107dd99"
}

// počáteční nastavení firebase (init)
firebase.initializeApp(firebaseConfig)

// počáteční nastavení služeb (services)
const projectFirestore = firebase.firestore()

export {projectFirestore}