import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addAttendeeThunk } from '../reduck/attendees.reduck';
import { firebaseWrite } from '../firebase/firebaseCalls';
import { getRandomHexColor } from '../helpers/helpers';

export const AddForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();

  return (
    <React.Fragment>
      <h3>Add a Attendee</h3>

      <form onSubmit={(e) => {
          e.preventDefault();
          const userId = uuidv4();
          const color = getRandomHexColor();
          const person = {id: userId, name: name, color: color, email: email}

          //dispatch(addAttendee(person));
          dispatch(addAttendeeThunk(person))
          firebaseWrite(person);
          setName('');
          setEmail('');
        }}>
        <div className="form-field">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-field">
          <label htmlFor="email">E-mail</label>
          <input
            type="text"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="break"></div>
        <button type="submit">Add Attendee</button>
      </form>
    </React.Fragment>
  );
}