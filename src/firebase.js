import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDyvQsy1Uaq1ncNWktNtufiO36PXls-2Ys",
  authDomain: "blog-90dca.firebaseapp.com",
  projectId: "blog-90dca",
  storageBucket: "blog-90dca.appspot.com",
  messagingSenderId: "808094047655",
  appId: "1:808094047655:web:a6aebc6c44ffab79c7ea82"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db};