import React from 'react';
import { useDispatch, shallowEqual, useSelector } from 'react-redux';
import { removeAttendee } from '../redux/actions/actions';

function AllAttendees() {
  const attendeeList = useSelector((state) => state.attendeeList, shallowEqual);
  const dispatch = useDispatch();

  function handleRemoveAttendeeBtnClick(index) {
    dispatch(removeAttendee(index));
  }

  const attendeeItems = attendeeList.map((person, index) => (
    <li className="attendees__attendee" key={index}>
      <div className="hello-badge" style={{backgroundColor: person.color}}>
				<p className="hello-badge__title"><span className="hello-badge__hello">{person.name}</span></p>
				<p className="hello-badge__name">{person.email}</p>
        <button className="alert button tiny" onClick={() => handleRemoveAttendeeBtnClick(index)}>Remove me</button>
			</div>
    </li>
  ));

  return (
    <React.Fragment>
      <h3>All Attendees</h3>

      <ul className="attendees">{attendeeItems}</ul>
    </React.Fragment>
  );
}

export default AllAttendees;
