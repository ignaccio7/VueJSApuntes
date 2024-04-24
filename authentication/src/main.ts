import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import {BootstrapVue3 } from 'bootstrap-vue-3'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

//PARA FIREBASE
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBMU4fQ1djIKxEUJpRAJ2nnQ2jhUvEwqk8",
  authDomain: "authentication-vuenr.firebaseapp.com",
  projectId: "authentication-vuenr",
  storageBucket: "authentication-vuenr.appspot.com",
  messagingSenderId: "409649662554",
  appId: "1:409649662554:web:844fc966bf12ffe3986663",
  measurementId: "G-JLXVQHSNL9"
};
// Initialize Firebase
initializeApp(firebaseConfig);

const app = createApp(App)
app.use(BootstrapVue3)
app.use(router)
app.mount('#app')
