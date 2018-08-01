import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyA7ql9OrT9UkTyjU1NEncm8kuTN5_nr8WA",
  authDomain: "nba-fullstack-56e8f.firebaseapp.com",
  databaseURL: "https://nba-fullstack-56e8f.firebaseio.com",
  projectId: "nba-fullstack-56e8f",
  storageBucket: "nba-fullstack-56e8f.appspot.com",
  messagingSenderId: "455326706091"
}

// Init App
firebase.initializeApp(config);

// Database Instance
const firebaseDb = firebase.database();

// Collections
const fbArticles = firebaseDb.ref('articles');
const fbTeams = firebaseDb.ref('teams');
const fbVideos = firebaseDb.ref('videos');

// Snapshot to Object
const snapShotToObject = (snapshot) => {
  const snapShotArray = [];
  snapshot.forEach((child) => {
    snapShotArray.push({
      ...child.val(),
      id: child.key
    });
  });
  return snapShotArray;
}

// Export
export {
  firebase,
  firebaseDb,
  fbArticles,
  fbTeams,
  fbVideos,
  snapShotToObject
}

