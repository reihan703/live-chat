import firebase from "firebase";
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
	apiKey: "AIzaSyC0VadJhaUpZJ8f4REEEC0BnhGMQdPwm8I",
	authDomain: "blog-vue-project-911ca.firebaseapp.com",
	projectId: "blog-vue-project-911ca",
	storageBucket: "blog-vue-project-911ca.appspot.com",
	messagingSenderId: "878422118604",
	appId: "1:878422118604:web:dd66b1c8da75c57d317269",
};

// INIT FIREBASE
firebase.initializeApp(firebaseConfig)

const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export {projectFirestore, projectAuth, timestamp}