import {NOT_LOGGED_IN, LOGGED_IN, GET_AUTH_REQUEST, GET_AUTH_ERROR} from './login.actions';
import {tassign} from 'tassign';

export interface ILoginState {
    authState: any;
}

export const LOGIN_INITIAL_STATE: ILoginState = {
    authState: null
};

export function loginReducer(state: ILoginState = LOGIN_INITIAL_STATE, action): ILoginState {
    switch (action.type) {
        case NOT_LOGGED_IN:
            return tassign(state, {authState: null});
        case LOGGED_IN:
            return tassign(state, {authState: action.authState});
        case GET_AUTH_REQUEST:
            return tassign(state, {authState: null});
        case GET_AUTH_ERROR:
            return tassign(state, {authState: null});
    }
    return state;
}
