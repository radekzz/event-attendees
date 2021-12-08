import { getDatabase, ref, onValue } from 'firebase/database';
import initFb from './firebaseInit';
import { useDispatch, useSelector, RootStateOrAny, shallowEqual } from 'react-redux';

initFb();

function FirebaseRead(): void {    
    const dispatch = useDispatch();

    const db = getDatabase();
    const collectionRef = ref(db, 'attendees');
    
    let attendeeList = useSelector((state: RootStateOrAny) => state.attendeeList, shallowEqual);
    if(attendeeList && attendeeList.length === 0){
        onValue(collectionRef, (snapshot) => {
        dispatch({ type: 'FETCH_ATTENDEES', payload: snapshot.val() });
        });
    }
}
export default FirebaseRead;