import firebase from "firebase/app";
import "firebase/firestore";

const app = firebase.initializeApp({
	apiKey: "AIzaSyAiIQKfK5aJ29hTbctwQS_SOdOG7y8ESoI",
	authDomain: "recargas247-03-02-2022.firebaseapp.com",
	projectId: "recargas247-03-02-2022",
	storageBucket: "recargas247-03-02-2022.appspot.com",
	messagingSenderId: "573930381925",
	appId: "1:573930381925:web:4fa24d51d8144fce1e5c8c",
	measurementId: "G-32VZNV6FB4",
});

export function getFirebase() {
	return app;
}

export function getFirestore() {
	return firebase.firestore(app);
}

export const getFirebaseTimeStamp = firebase.firestore.Timestamp.now();
