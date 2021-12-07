import { getDatabase, ref, set } from 'firebase/database';
import initFb from './firebaseInit';

initFb();

function writeUserData(userId: number, name: string, email: string, imageUrl: string) {
    const db = getDatabase();
    set(ref(db, 'attendees/' + userId), {
      username: name,
      email: email,
      profile_picture : imageUrl
    });
  }
export default writeUserData;