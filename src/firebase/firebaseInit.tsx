import firebaseConfig from './firebaseConfig';
import { initializeApp } from "firebase/app";
import { getDatabase, ref } from 'firebase/database';

const initFb = (): void => {
    // Initialize Firebase
    //const app = initializeApp(firebaseConfig);
    initializeApp(firebaseConfig);
    //  const database = getDatabase(app)
    //  const dbRef = ref(database, "db")
}

export default initFb;