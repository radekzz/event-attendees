export type ReduxAction = {
  type: 'ADD_ATTENDEE' | 'REMOVE_ATTENDEE';
  id: number,
  name: string,
  color: string,
  email: string,
}

export type Person = Omit<ReduxAction, "type">;