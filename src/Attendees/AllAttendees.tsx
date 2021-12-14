import React from 'react';
import { useDispatch, shallowEqual, useSelector, RootStateOrAny } from 'react-redux';
import { removeAttendeeThunk } from 'reduck/attendees.reduck';
import { Person } from 'types/types';
import { useFirebaseRead, firebaseDelete } from '../firebase/firebaseCalls';

export const AllAttendees = () => {

  useFirebaseRead();

  let attendeeList = useSelector((state: RootStateOrAny) => state.attendeeList, shallowEqual);
  const dispatch = useDispatch();

  const handleRemoveAttendeeBtnClick = (id: string) => {
    dispatch(removeAttendeeThunk(id));
    firebaseDelete(id);
  }

  const attendeeItems = attendeeList && attendeeList.map((person: Person, index: number) => (
    <li className="attendees__attendee" key={index}>
      <div className="hello-badge" style={{backgroundColor: person.color}}>
				<p className="hello-badge__title"><span className="hello-badge__hello">{person.name}</span></p>
				<p className="hello-badge__name">{person.email}</p>
        <button className="alert button tiny" onClick={() => handleRemoveAttendeeBtnClick(person.id)}>Remove me</button>
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
