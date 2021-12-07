import { ADD_ATTENDEE, REMOVE_ATTENDEE } from '../actions/actions';

const initialState = {
  attendeeList: [{
    name: 'Franta Vomáčka',
    color: '#E74C3C',
    email: 'frantavomacka@gmail.com',
  }, {
    name: 'Pepa Zdepa',
    color: '#553285',
    email: 'pepa@gmail.com',
  }, {
    name: 'Redux Reynolds',
    color: '#296AA8',
    email: 'redux@raynolds.com',
  }, {
    name: 'React Typescript',
    color: '#202020',
    email: 'react@ts.io',
  }, {
    name: 'Ryan Reynolds',
    color: '#287572',
    email: 'ryan@hollywood.org',
  }, {
    name: 'Mark Zuckerberg',
    color: '#3b5998',
    email: 'info@facebook.com',
  }, ],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ATTENDEE:
      return {
        attendeeList: [
          ...state.attendeeList,
          {
            name: action.name,
            color: action.color,
            email: action.email,
          },
        ],
      };
    case REMOVE_ATTENDEE:
      return {
        attendeeList: state.attendeeList.filter((person, index) => index !== action.id),
      };

    default:
      return state;
  }
}

export default rootReducer;
