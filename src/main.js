import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'

// Required for side-effects
require("firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyCoizRASqhJ6H4JehMQ5KoiaBIDbteQyfA",
  authDomain: "vuechat-20bc0.firebaseapp.com",
  databaseURL: "https://vuechat-20bc0.firebaseio.com",
  projectId: "vuechat-20bc0",
  storageBucket: "vuechat-20bc0.appspot.com",
  messagingSenderId: "857083219087",
  appId: "1:857083219087:web:897dbdee9256b50205f4fa",
  measurementId: "G-HXKHN5VM8T"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();
var db = firebase.firestore();

window.db = db;

// db.settings({
//   timestampsInSnapshots: true
// })


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
