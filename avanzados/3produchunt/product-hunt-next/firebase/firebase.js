import app from "firebase/app";
import firebaseConfig from "./config";

class Firebase {
  constructor() {
    if (!app.app.length) {
      app.initializeApp(firebaseConfig);
    }
  }
}
const firebase = new Firebase();

export default firebase;
