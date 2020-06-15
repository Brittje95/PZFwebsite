const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
  apiKey: "AIzaSyBxHiVhfYUHreUgKnpJOZZPHq5xRXkiDcY",
  authDomain: "peter-zegveld-fotografie.firebaseapp.com",
  projectId: "peter-zegveld-fotografie"
});

let db = firebase.firestore();

db.collection("users")
  .add({
    first: "Ada",
    last: "Lovelace",
    born: 1815
  })
  .then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
  })
  .catch(function(error) {
    console.error("Error adding document: ", error);
  });

db.collection("users")
  .get()
  .then(querySnapshot => {
    querySnapshot.forEach(doc => {
      console.log(`${doc.id} => ${doc.data()}`);
    });
  });
