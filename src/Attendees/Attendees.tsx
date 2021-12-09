import React from 'react';
import AddForm from './AddForm';
import AllAttendees from './AllAttendees';

const Attendees = () => {
  return (
    <React.Fragment>
      <h1>Event attendees signup</h1>

      <AddForm />
      <hr />
      <AllAttendees />
    </React.Fragment>
  );
}

export default Attendees;
