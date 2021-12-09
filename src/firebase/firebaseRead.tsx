import { getDatabase, ref, onValue } from 'firebase/database';
import { useDispatch, useSelector, RootStateOrAny, shallowEqual } from 'react-redux';

const FirebaseRead = () => {    
    const dispatch = useDispatch();

    const db = getDatabase();
    const collectionRef = ref(db, 'attendees'); // Get reference to database collection 'attendees'
    
    let attendeeList = useSelector((state: RootStateOrAny) => state.attendeeList, shallowEqual); // Get data from Redux
    if(attendeeList && attendeeList.length === 0){ // If Redux data are empty
        onValue(collectionRef, (snapshot) => { // Fetch data from Firebase and save them to Redux
        dispatch({ type: 'FETCH_ATTENDEES', payload: snapshot.val() }); // Save data to Redux
        });
    }
}
export default FirebaseRead;