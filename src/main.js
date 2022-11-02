import { createApp } from 'vue'
import App from './App.vue'
import router from './router';

import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyC3GavGsHD4eCd45yOnHjSHfP39yl-YR6c",
  authDomain: "todolist-auth-vuejs.firebaseapp.com",
  projectId: "todolist-auth-vuejs",
  storageBucket: "todolist-auth-vuejs.appspot.com",
  messagingSenderId: "628839991195",
  appId: "1:628839991195:web:5001e1229a7f4d9a3a833e",
  measurementId: "G-5SDYN6XWQ1"
};

const appFirebase = initializeApp(firebaseConfig)
export const db = getFirestore(appFirebase)
const app = createApp(App)
app.use(router)
app.mount('#app');