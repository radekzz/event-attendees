import { ADD_ATTENDEE, REMOVE_ATTENDEE, FETCH_ATTENDEES } from '../actions/actions';
import { ReduxAction } from 'types/types'
import { Person } from 'types/types';

const initialState = {
  attendeeList: [] as Person[]
};

const rootReducer = (state = initialState, action: ReduxAction) => {
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

export default rootReducer;
