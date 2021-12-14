import { Dispatch } from 'redux';
import { ReduxAction, Person } from "types/types";

// THUNKS

export const addAttendeeThunk = (person: Person) => async (dispatch: Dispatch) => {
  dispatch(addAttendee(person))
}

export const removeAttendeeThunk = (id: string) => async (dispatch: Dispatch) => {
  dispatch(removeAttendee(id))
}

export const fetchAttendeesThunk = (person: Person) => async (dispatch: Dispatch) => {
  dispatch(fetchAttendees(person))
}

// ACTIONS

export const ADD_ATTENDEE = 'ADD_ATTENDEE';
export const REMOVE_ATTENDEE = 'REMOVE_ATTENDEE';
export const FETCH_ATTENDEES = 'FETCH_ATTENDEES';

export const addAttendee = (person: Person) => ({ type: ADD_ATTENDEE, payload: { person } });

export const removeAttendee = (id: string) => {
  return { type: REMOVE_ATTENDEE, payload: {id: id }};
}

export const fetchAttendees = (person: Person) => {
  return { type: FETCH_ATTENDEES, payload: person };
}

// REDUCERS

const initialState = {
  attendeeList: [] as Person[]
};

export const rootReducer = (state = initialState, action: ReduxAction) => {
  switch (action.type) {
    case ADD_ATTENDEE:
      return {
        attendeeList: [
          ...state.attendeeList,
          {
            id: action.payload.id,
            name: action.payload.name,
            color: action.payload.color,
            email: action.payload.email,
          },
        ],
      };
      case REMOVE_ATTENDEE:
        return {
          attendeeList: state.attendeeList.filter((person, index) => person.id !== action.payload.id),
        };
      case FETCH_ATTENDEES:
        let result:any = [];
        if(action.payload){
          // eslint-disable-next-line 
          for (const [key, value] of Object.entries(action.payload)) {
            result.push(value)
          }
        }
        return {
          attendeeList: result
        };

    default:
      return state;
  }
}