import firebase from 'firebase/app'
import "firebase/auth"

const app = firebase.initializeApp({
    apiKey: "AIzaSyDLJRop7Tp_odp4j3D6E98p2pXQMmrWzl0",
    authDomain: "auth-dev-faaec.firebaseapp.com",
    projectId: "auth-dev-faaec",
    storageBucket: "auth-dev-faaec.appspot.com",
    messagingSenderId: "883899692531",
    appId: "1:883899692531:web:79769fc3e428633124ce86"
});
export const auth = app.auth()
export default app