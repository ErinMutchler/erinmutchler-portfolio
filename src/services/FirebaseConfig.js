import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import FirestoreService from "./FirestoreService";
import StorageService from "./StorageService";
const firebaseConfig = {
  apiKey: "AIzaSyBLolfEqSIGc61V06JN7sbmedIuo2sdjzg",
  authDomain: "erin-mutchler-portfolio.firebaseapp.com",
  projectId: "erin-mutchler-portfolio",
  storageBucket: "erin-mutchler-portfolio.appspot.com",
  messagingSenderId: "145686848972",
  appId: "1:145686848972:web:6a488ab7a3001c91e7a969",
  measurementId: "G-2P0TD8RK5B",
};

const firebaseApp = initializeApp(firebaseConfig);
const firestore = getFirestore(firebaseApp);
const storageRef = getStorage(firebaseApp);

export const firestoreService = new FirestoreService(firestore);
export const storageService = new StorageService(storageRef);
