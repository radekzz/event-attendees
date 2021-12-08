export type ReduxAction = {
  type: 'ADD_ATTENDEE' | 'REMOVE_ATTENDEE' | 'FETCH_ATTENDEES';
  payload: {
    id: string,
    name: string,
    color: string,
    email: string,
  }
}

export type Person = ReduxAction["payload"];