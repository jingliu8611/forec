import {NOT_LOGGED_IN, LOGGED_IN} from './login.actions';
import {tassign} from 'tassign';

export interface ILoginState {
  authState: any;
}

export const LOGIN_INITIAL_STATE: ILoginState = {
  authState: null
};

export function loginReducer(state: ILoginState = LOGIN_INITIAL_STATE, action): ILoginState {
  switch (action.type) {
    case NOT_LOGGED_IN: return tassign(state, {authState: null});
    case LOGGED_IN: return tassign(state, {authState: action.authState});
  }
  return state;
}
