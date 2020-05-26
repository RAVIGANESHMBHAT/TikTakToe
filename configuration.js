// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCs95pOO2eAgLtep3v7eaTrJJm1X1RXJ3U",
    authDomain: "chat-app-9abe7.firebaseapp.com",
    databaseURL: "https://chat-app-9abe7.firebaseio.com",
    projectId: "chat-app-9abe7",
    storageBucket: "chat-app-9abe7.appspot.com",
    messagingSenderId: "625053413425",
    appId: "1:625053413425:web:bb022f1979ae03e4066510",
    measurementId: "G-GC9QP143PT"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  // make auth and firestore references
    const auth = firebase.auth();
    const db = firebase.firestore();

    const database =firebase.database();