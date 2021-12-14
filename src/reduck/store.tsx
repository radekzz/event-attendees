import { createStore, applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import { rootReducer } from './attendees.reduck';

export function createAppStore(initState?: any) {
  return createStore(
    rootReducer,
    applyMiddleware(thunk)
  );
}
