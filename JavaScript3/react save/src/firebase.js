import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDclASvo-Y_6ijnfVoE_EvqwFEr0QtjZ6w",
    authDomain: "dinosaurs-650d2.firebaseapp.com",
    databaseURL: "https://dinosaurs-650d2.firebaseio.com",
    projectId: "dinosaurs-650d2",
    storageBucket: "dinosaurs-650d2.appspot.com",
    messagingSenderId: "188270579614"
};

firebase.initializeApp(config);
export default firebase;