import { getDatabase, ref, set } from 'firebase/database';
import initFb from './firebaseInit';

initFb();

function WriteUserData(id: string, name: string, color: string, email: string): void {
    const db = getDatabase();
    set(ref(db, 'attendees/' + id), {
      id: id,
      name: name,
      color: color,
      email: email,
    });
  }
export default WriteUserData;