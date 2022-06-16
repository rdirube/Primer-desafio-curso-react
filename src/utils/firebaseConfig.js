import { initializeApp } from "firebase/app"
import { getFirestore} from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyAvaTUsUA6ErgFEMGo4ofPEe4eZno1Dueo",
  authDomain: "coderhouse-ecommerce-5bbf7.firebaseapp.com",
  projectId: "coderhouse-ecommerce-5bbf7",
  storageBucket: "coderhouse-ecommerce-5bbf7.appspot.com",
  messagingSenderId: "1084127370440",
  appId: "1:1084127370440:web:960036d29b5c8a454319fd",
  measurementId: "G-CFNQN1YHCK"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);


export default db;