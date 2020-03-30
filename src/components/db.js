import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyA-Y7MVvuB6YAy-s1QX7uShx8UP1SYAcHk",
    authDomain: "queueapp-27475.firebaseapp.com",
    databaseURL: "https://queueapp-27475.firebaseio.com",
    projectId: "queueapp-27475",
    storageBucket: "queueapp-27475.appspot.com",
    messagingSenderId: "743502638497",
    appId: "1:743502638497:web:272e5adef4dadbac336fe0",
    measurementId: "G-N02Y4S6LCL"
};
var fire=firebase.initializeApp(firebaseConfig)

export default fire