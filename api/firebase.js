require('dotenv').config();
const{GOOGLE_APPLICATION_CREDENTIALS}=process.env
const { initializeApp, applicationDefault } = require("firebase-admin/app");
const { getFirestore } = require("firebase-admin/firestore");

initializeApp({
  credential: applicationDefault(),
});

const db = getFirestore();

module.exports = {
  db,
};