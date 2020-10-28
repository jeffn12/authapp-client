import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import FS_VARS from './.firebase.config.js';

const firebaseConfig = {
  apiKey: FS_VARS.apiKey,
  authDomain: FS_VARS.authDomain,
  databaseURL: FS_VARS.databaseURL,
  projectId: FS_VARS.projectId,
  storageBucket: FS_VARS.storageBucket,
  messagingSenderId: FS_VARS.messagingSenderId,
  appId: FS_VARS.appId,
};

const fbApp = firebase.initializeApp(firebaseConfig);
export const auth = fbApp.auth();
export const db = fbApp.firestore();
export default fbApp;
