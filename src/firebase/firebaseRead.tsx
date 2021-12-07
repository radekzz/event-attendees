import { useState } from 'react';
import { getDatabase, ref, child, get } from 'firebase/database';
import initFb from './firebaseInit';

initFb();
const [fbData, setFbData] = useState('');

function readData() {    
    
    const dbRef = ref(getDatabase());
    get(child(dbRef, `attendees`)).then((snapshot) => {
        // to get one attendee, call 'attendees/0'
    if (snapshot.exists()) {
        console.log(snapshot.val());
        setFbData(snapshot.val());
    } else {
        console.log("No data available");
    }
    }).catch((error) => {
        console.error(error);
    });
    return fbData;
}
export default readData;