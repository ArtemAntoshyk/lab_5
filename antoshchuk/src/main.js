import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import router from './plugins/router.plugin'

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAuKSI73Tvt0iPm2edwkNpbY-roxOCVzvw",
  authDomain: "laba-26a3e.firebaseapp.com",
  projectId: "laba-26a3e",
  storageBucket: "laba-26a3e.appspot.com",
  messagingSenderId: "496866658954",
  appId: "1:496866658954:web:f787cee26b1328cd3efb73",
  measurementId: "G-ZMEQ7X2C1P"
};

initializeApp(firebaseConfig);

const app = createApp(App)
app.use(router)
app.mount('#app')
