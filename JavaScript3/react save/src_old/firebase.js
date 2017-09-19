import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyA67QGcsfsqSfXbCTCgDPxD3zBl9maHc1Q",
    authDomain: "beginner-project-aac39.firebaseapp.com",
    databaseURL: "https://beginner-project-aac39.firebaseio.com",
    projectId: "beginner-project-aac39",
    storageBucket: "beginner-project-aac39.appspot.com",
    messagingSenderId: "146881789533"
};

firebase.initializeApp(config);
export default firebase;