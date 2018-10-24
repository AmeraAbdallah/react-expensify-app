import * as firebase from 'firebase';

var config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
  };

  firebase.initializeApp(config);

  const database = firebase.database();

  export {firebase, database as default};
  // database.ref('expenses').on('value', function(dataSnapshot) {
  //   const expenses = [];

  //   dataSnapshot.forEach((childSnapshot)=>{
  //     expenses.push({
  //       id: childSnapshot.key,
  //       ...childSnapshot.val()
  //     });
  //   });
  //   console.log(expenses);
  // });
  // database.ref('expenses').once('value').then((snapshot)=>{
  //   const expenses = [];

  //   snapshot.forEach((childSnapshot)=>{
  //     expenses.push({
  //       id: childSnapshot.key,
  //       ...childSnapshot.val()
  //     });
  //   });
  //   console.log(expenses);
  // });
  
  // database.ref('expenses').push({
  //   description: 'Rent',
  //   amount: 1050000,
  //   createdAt: 78500000,
  //   note: ''
  // });

  // database.ref('expenses').push({
  //   description: 'Buy Car',
  //   amount: 3000000,
  //   createdAt: 78500000,
  //   note: ''
  // });