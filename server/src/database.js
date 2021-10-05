const { initializeApp } = require("firebase/app");
const { getDatabase } = require("firebase/database");

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCpgGXxZ0DWczSC6RE9dsYiYWKWbCR7zyQ",
  authDomain: "test-1-1-ad9f1.firebaseapp.com",
  projectId: "test-1-1-ad9f1",
  storageBucket: "test-1-1-ad9f1.appspot.com",
  messagingSenderId: "381227019016",
  appId: "1:381227019016:web:4723761523c2470ee99abd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase();

module.exports = database;