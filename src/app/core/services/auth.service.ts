import {Injectable} from '@angular/core';
import {NgRedux} from '@angular-redux/store';
import {GET_AUTH_REQUEST, NOT_LOGGED_IN, LOGGED_IN, GET_AUTH_ERROR} from '../login/login.actions';
import {IAppState} from '../store/store';
import {FirebaseAdapter} from '../adapters/firebase.adapter';
import {THIRD_PARTIES} from '../../shared/constants/third-party-login';

declare let $;

@Injectable()
export class AuthService {

    constructor(private ngRedux:NgRedux<IAppState>,
                private adapter:FirebaseAdapter) {
        this.ngRedux.dispatch({type: GET_AUTH_REQUEST});
        this.getAuth().subscribe(
            authState => {
                if (!authState) {
                    console.log('header comp - state - not logged in', authState);
                    this.ngRedux.dispatch({type: NOT_LOGGED_IN});
                } else {
                    console.log('header comp - state - logged in', authState);
                    this.ngRedux.dispatch({type: LOGGED_IN, authState: authState});
                    this.closeLoginModal();
                }
            },
            err => {
                console.log('header comp - state - login error', err);
                this.ngRedux.dispatch({type: GET_AUTH_ERROR});
            }
        );
    }

    login(email, password) {
        return this.adapter.login(email, password);
    }

    logout() {
        return this.adapter.logout();
    }

    register(email, password) {
        return this.adapter.register(email, password);
    }

    thirdPartyLogin(thirPartyName = THIRD_PARTIES[1]) {
        return this.adapter.thirdPartyLogin(thirPartyName);
    }

    getAuth() {
        return this.adapter.getAuth();
    }

    private closeLoginModal() {
        $('#modal1').modal('close');
    }
}
