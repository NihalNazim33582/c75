import *as firebase from "firebase"
require('@firebase/firestore')
  
  var firebaseConfig = {
    apiKey: "AIzaSyDcmEMDODS1ZZ3btlvJ5sx2J16ATnHNzyM",
    authDomain: "bed-time-stories-c0382.firebaseapp.com",
    databaseURL: "https://bed-time-stories-c0382-default-rtdb.firebaseio.com",
    projectId: "bed-time-stories-c0382",
    storageBucket: "bed-time-stories-c0382.appspot.com",
    messagingSenderId: "578416300685",
    appId: "1:578416300685:web:430680a861f3e4b53608c4"
  };
  
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();