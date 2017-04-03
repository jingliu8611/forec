import {ILoginState, LOGIN_INITIAL_STATE, loginReducer} from './core/login/login.store';
import {combineReducers} from 'redux';

export interface IAppState {
  login: ILoginState;
}

export const INITIAL_STATE = {
  login: LOGIN_INITIAL_STATE
};

export const rootReducer = combineReducers({
  login: loginReducer
});
