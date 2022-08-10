const a = require('./firebase-admin.json')
/* require('dotenv').config();
console.log(require('dotenv')) */
const { initializeApp, applicationDefault, cert } = require("firebase-admin/app");
const { getFirestore } = require("firebase-admin/firestore");

initializeApp({
  credential: cert(a),
});
const db = getFirestore();
module.exports = {
  db,
};