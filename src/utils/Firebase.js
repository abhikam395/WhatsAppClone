import firebase from 'firebase/app';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyA2CnRlVDBhw-Oj2_k_-sJ8WpOwd1xq-Uc",
    authDomain: "whatsapp-623f4.firebaseapp.com",
    projectId: "whatsapp-623f4",
    storageBucket: "whatsapp-623f4.appspot.com",
    messagingSenderId: "14934064206",
    appId: "1:14934064206:web:595ffcb226cd25ae47171f",
    measurementId: "G-BJTN9TPTZY"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

export default firebase;