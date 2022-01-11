import { getDatabase, ref, onValue, set, remove } from 'firebase/database';
import { useDispatch, useSelector, RootStateOrAny, shallowEqual } from 'react-redux';
import { Person } from 'types/types';
import { syncWidthFirebase } from '../helpers/helpers';
import { fetchAttendeesThunk } from 'reduck/attendees.reduck';

export const useFirebaseRead = () => {    
    const dispatch = useDispatch();
    const db = getDatabase();
    const collectionRef = ref(db, 'attendees'); // Get reference to database collection 'attendees'
    
    let attendeeList = useSelector((state: RootStateOrAny) => state.attendeeList, shallowEqual); // Get data from Redux
    if(syncWidthFirebase && attendeeList && attendeeList.length === 0){ // If Redux data are empty
        onValue(collectionRef, (snapshot) => { // Fetch data from Firebase and save them to Redux
          dispatch(fetchAttendeesThunk(snapshot.val()))
        });
    }
}

export const firebaseUpdate = (person: Person) => {
  const db = getDatabase();
  syncWidthFirebase && set(ref(db, 'attendees/' + person.id), person);
}

export const firebaseWrite = (person: Person) => {
  const db = getDatabase();
  syncWidthFirebase && set(ref(db, 'attendees/' + person.id), person);
}

export const firebaseDelete = (id: string) => {
  const db = getDatabase();
  syncWidthFirebase && remove(ref(db, 'attendees/' + id));
}