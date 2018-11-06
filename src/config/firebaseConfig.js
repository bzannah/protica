import firebase from 'firebase/app'; // only core func
import 'firebase/database';
import 'firebase/auth';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyBV-_56SS7ca0Ng3xMDjEpJoP-eoSLQAu4",
    authDomain: "protica-5c89e.firebaseapp.com",
    databaseURL: "https://protica-5c89e.firebaseio.com",
    projectId: "protica-5c89e",
    storageBucket: "protica-5c89e.appspot.com",
    messagingSenderId: "506100124973"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });


export default firebase;