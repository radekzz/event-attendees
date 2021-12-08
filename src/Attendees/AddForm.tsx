import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addAttendee } from '../redux/actions/actions';
import WriteUserData from '../firebase/firebaseWrite';

function AddForm() {
  //const [id] = useState(uuidv4());
  const [name, setName] = useState('');
  const [color, setColor] = useState('');
  const [email, setEmail] = useState('');


  const dispatch = useDispatch();

  const randomColor = () => {
    setColor("#" + (Math.round(Math.random() * 0XFFFFFF)).toString(16));
  }
  
  function handleSubmission(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const userId = uuidv4();

    randomColor();
    dispatch(addAttendee(userId, name, color, email));
    WriteUserData(userId, name, color, email);
    setName('');
    setColor('');
    setEmail('');
  }

  useEffect(() => {
    randomColor();
  }, [name]);

  return (
    <React.Fragment>
      <h3>Add a Attendee</h3>

      <form onSubmit={handleSubmission}>
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

export default AddForm;
