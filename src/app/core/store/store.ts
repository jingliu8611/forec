import {loginReducer, ILoginState} from '../../core/login/login.store';
import {combineReducers} from 'redux';

export interface IAppState {
    login?: ILoginState;
}

export const rootReducer = combineReducers({
    login: loginReducer
});
