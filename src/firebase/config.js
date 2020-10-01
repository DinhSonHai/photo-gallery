import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyBLsMpbYad7C4L7HknIkZUwOKHUHn6yFKw',
  authDomain: 'photo-gallery-c9c8b.firebaseapp.com',
  databaseURL: 'https://photo-gallery-c9c8b.firebaseio.com',
  projectId: 'photo-gallery-c9c8b',
  storageBucket: 'photo-gallery-c9c8b.appspot.com',
  messagingSenderId: '383484688846',
  appId: '1:383484688846:web:79d320f4f3efeb7748139f',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
