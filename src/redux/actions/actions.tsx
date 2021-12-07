export const ADD_ATTENDEE = 'ADD_ATTENDEE';
export const REMOVE_ATTENDEE = 'REMOVE_ATTENDEE';

export function addAttendee(name: string, color: string, email: string) {
  return { type: ADD_ATTENDEE, name: name, color: color , email: email };
}

export function removeAttendee(id: number) {
  return { type: REMOVE_ATTENDEE, id: id };
}
