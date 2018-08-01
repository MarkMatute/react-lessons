import * as firebase from 'firebase';

const config = {

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

