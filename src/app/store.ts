import {INCREMENT, NOT_LOGGED_IN, LOGGED_IN} from './actions';
import {tassign} from 'tassign';

export interface IAppState {
  counter: number;
  authState: any;
}

export const INITIAL_STATE = {
  counter: 0,
  authState: null
}

export function rootReducer(state: IAppState, action): IAppState {
  switch (action.type) {
    case INCREMENT: return tassign(state, {counter: state.counter + 1});
    case NOT_LOGGED_IN: return tassign(state, {authState: null});
    case LOGGED_IN: return tassign(state, {authState: action.authState});
  }
  return state;
}
