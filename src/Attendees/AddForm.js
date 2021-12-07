import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addAttendee } from '../redux/actions/actions';

function AddForm() {
  const [name, setName] = useState('');
  const [color, setColor] = useState('');
  const [email, setEmail] = useState('');

  const dispatch = useDispatch();

  const randomColor = () => {
    setColor("#" + (Math.round(Math.random() * 0XFFFFFF)).toString(16));
  }
  
  function handleSubmission(e) {
    e.preventDefault();
    
    randomColor();
    dispatch(addAttendee(name, color, email));
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
        <br />
        <button type="submit">Add Attendee</button>
      </form>
    </React.Fragment>
  );
}

export default AddForm;
