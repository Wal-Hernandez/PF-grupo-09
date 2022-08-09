require('./firebase-admin.json')
/* require('dotenv').config();
console.log(require('dotenv')) */
const { initializeApp, applicationDefault } = require("firebase-admin/app");
const { getFirestore } = require("firebase-admin/firestore");

initializeApp({
  credential: applicationDefault(),
});

const db = getFirestore();

module.exports = {
  db,
};