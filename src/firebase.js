import firebase from 'firebase'
import 'firebase/storage'

var firebaseConfig = {
  apiKey: "AIzaSyCHFY46nNQ8_4dUuQMReIdsKAQjh1jGq68",
  authDomain: "dotify-9c677.firebaseapp.com",
  databaseURL: "https://dotify-9c677.firebaseio.com",
  projectId: "dotify-9c677",
  storageBucket: "dotify-9c677.appspot.com",
  messagingSenderId: "991702961515",
  appId: "1:991702961515:web:851284ecabfa09a75e502e"
};

const fire = firebase.initializeApp(firebaseConfig);

const storage = firebase.storage()

export { storage, fire as default };