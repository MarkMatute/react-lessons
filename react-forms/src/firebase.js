import * as firebase from 'firebase';

const config = {
 
};

firebase.initializeApp(config);

const firebaseDB = firebase.database();
const googleAuth = new firebase.auth.GoogleAuthProvider();

export { firebase, firebaseDB, googleAuth }
