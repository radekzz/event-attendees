export const ADD_ATTENDEE = 'ADD_ATTENDEE';
export const REMOVE_ATTENDEE = 'REMOVE_ATTENDEE';
export const FETCH_ATTENDEES = 'FETCH_ATTENDEES';

export function addAttendee(id: string, name: string, color: string, email: string) {
  return { type: ADD_ATTENDEE, payload: {id: id, name: name, color: color , email: email }};
}

export function removeAttendee(id: string) {
  return { type: REMOVE_ATTENDEE, payload: {id: id }};
}

export function fetchAttendees(id: string, name: string, color: string, email: string) {
  return { type: FETCH_ATTENDEES, payload: {id: id, name: name, color: color , email: email}};
}