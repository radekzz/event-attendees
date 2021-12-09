import { getDatabase, ref, set } from 'firebase/database';

const WriteUserData = (id: string, name: string, color: string, email: string) => {
    const db = getDatabase();
    set(ref(db, 'attendees/' + id), {
      id: id,
      name: name,
      color: color,
      email: email,
    });
  }
export default WriteUserData;