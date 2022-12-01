import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage'


const firebaseConfig = {
  apiKey: "AIzaSyCHe22io9SwzGGW6o4XL9YMAWale4G5L-8",
  authDomain: "reactuploads-382c9.firebaseapp.com",
  projectId: "reactuploads-382c9",
  storageBucket: "reactuploads-382c9.appspot.com",
  messagingSenderId: "621573759945",
  appId: "1:621573759945:web:bd7b2bca18f1707e697e18",
  measurementId: "G-EZQ0E0XC3R"
};


export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
