// Config file
import * as firebase from "firebase";

var config = {
  apiKey: "AIzaSyCajHEf6PWlQDTxn17rgyuj-AGwc4Db5T4",
  authDomain: "opox-demo.firebaseapp.com",
  databaseURL: "https://opox-demo.firebaseio.com",
  projectId: "opox-demo",
  storageBucket: "opox-demo.appspot.com",
  messagingSenderId: "329545607784"
};

export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();

//export default firebase.app();