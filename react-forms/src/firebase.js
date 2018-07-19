import * as firebase from 'firebase';
var config = {
  
};
firebase.initializeApp(config);

export const firebaseDB = firebase.database();

