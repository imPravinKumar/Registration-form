import { getDatabase } from "firebase/database"
export const database = getDatabase(app);
const handleSubmit = () =>{
    let obj = {
            firstName : firstName,
            lastName:lastName,
            mobile:mobile,
            age:age,
            time:time,
            email:email,
            password:password,
            
        }       
    const newPostKey = push(child(ref(database), 'posts')).key;
    const updates = {};
    updates['/' + newPostKey] = obj
    return update(ref(database), updates);
}
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNk_GTK65kASlbemVrka90c_qx7t7iCTM",
  authDomain: "registration-forms-8ef6c.firebaseapp.com",
  databaseURL: "https://registration-forms-8ef6c-default-rtdb.firebaseio.com",
  projectId: "registration-forms-8ef6c",
  storageBucket: "registration-forms-8ef6c.appspot.com",
  messagingSenderId: "405018105135",
  appId: "1:405018105135:web:f0415f7d32a9de8b067dda",
  measurementId: "G-1WK5KPWWTR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);