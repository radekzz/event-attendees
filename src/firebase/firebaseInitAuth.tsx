
import { appEnvs } from 'config';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const FirebaseInitAuth = () => {
  // Init Firebase database
  firebase.initializeApp(appEnvs.firebase);

  // Sign in user anonymously, catch error if any
  firebase.auth().signInAnonymously().catch(function(error) {
    console.log(error);
  });

  // Once user is anonymously logged in, authentication stage will change.
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // run your required function here or 
      // use if(isAnonymous) { required action }
    } else {
      
    }
  });

  }
export default FirebaseInitAuth;