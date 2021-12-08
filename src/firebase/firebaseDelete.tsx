import { getDatabase, ref, remove } from 'firebase/database';
import initFb from './firebaseInit';

initFb();

function FirebaseDelete(id: string): void {
    const db = getDatabase();
    remove(ref(db, 'attendees/' + id));
  }
export default FirebaseDelete;