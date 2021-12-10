import { createStore } from 'redux';
import { rootReducer } from './attendees.reduck';

export function createAppStore(initState?: any) {
  return createStore(
    rootReducer,
    undefined
  );
}
