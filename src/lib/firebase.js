// Config file
import * as firebase from "firebase";

var config = {
  apiKey: "AIzaSyCke0mewjv53IW4wy5mSYnXLWII2x4jwsU",
  authDomain: "geldheld-746c9.firebaseapp.com",
  databaseURL: "https://geldheld-746c9.firebaseio.com",
  projectId: "geldheld-746c9",
  storageBucket: "geldheld-746c9.appspot.com",
  messagingSenderId: "258289884279"
};

export default (!firebase.apps.length
  ? firebase.initializeApp(config)
  : firebase.app());

//export default firebase.app();
