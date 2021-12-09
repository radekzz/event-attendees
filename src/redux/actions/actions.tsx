import { Person } from "types/types";

export const ADD_ATTENDEE = 'ADD_ATTENDEE';
export const REMOVE_ATTENDEE = 'REMOVE_ATTENDEE';
export const FETCH_ATTENDEES = 'FETCH_ATTENDEES';

export const addAttendee = (person: Person) =>  {
  return { type: ADD_ATTENDEE, payload: {id: person.id, name: person.name, color: person.color , email: person.email }};
}

export const removeAttendee = (id: string) => {
  return { type: REMOVE_ATTENDEE, payload: {id: id }};
}

export const fetchAttendees = (person: Person) => {
  return { type: FETCH_ATTENDEES, payload: {id: person.id, name: person.name, color: person.color , email: person.email}};
}