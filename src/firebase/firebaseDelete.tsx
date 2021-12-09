import { getDatabase, ref, remove } from 'firebase/database';

const FirebaseDelete = (id: string) => {
    const db = getDatabase();
    remove(ref(db, 'attendees/' + id));
  }
export default FirebaseDelete;