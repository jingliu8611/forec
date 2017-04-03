import {Injectable} from '@angular/core';
import {NgRedux} from 'ng2-redux';
import {IAppState} from '../../store';
import {GET_AUTH_REQUEST, NOT_LOGGED_IN, LOGGED_IN, GET_AUTH_ERROR} from '../../core/login/login.actions';
import {FirebaseAdapter} from '../adapters/firebase.adapter';
import {THIRD_PARTIES} from '../constants/third-party-login';

@Injectable()
export class AuthService {

    constructor(private adapter: FirebaseAdapter,
                private ngRedux: NgRedux<IAppState>) {

    }

    public login(email, password) {
        this.adapter.login(email, password).subscribe(
            authState => {
                console.log('adapter - login success ', authState)
            },
            err => {
                console.log('adapter - login fail ', err);
            }
        );
    }

    public logout() {
        this.adapter.logout().subscribe(
            authState => {
                console.log('adapter - logout success ', authState)
            },
            err => {
                console.log('adapter - logout fail ', err);
            }
        );
    }

    public register() {
        this.adapter.register('111@gmail.com', 'admin@123').subscribe(
            authState => {
                console.log('adapter - register success ', authState)
            },
            err => {
                console.log('adapter - register fail ', err);
            }
        );
    }

    public thirdPartyLogin(type = THIRD_PARTIES[1]) {
        this.adapter.thirdPartyLogin(type).subscribe(
            authState => {
                console.log('adapter - third party login success ', authState)
            },
            err => {
                console.log('adapter - third party login fail ', err);
            }
        );
    }

    getAuth() {
        this.ngRedux.dispatch({type: GET_AUTH_REQUEST});
        this.adapter.getAuth().subscribe(
            authState => {
                if (!authState) {
                    console.log('auth service - state - not logged in', authState);
                    this.ngRedux.dispatch({type: NOT_LOGGED_IN});
                } else {
                    console.log('auth service - state - logged in', authState);
                    this.ngRedux.dispatch({type: LOGGED_IN, authState: authState});
                }
            },
            err => {
                console.log('auth service - state - login error', err);
                this.ngRedux.dispatch({type: GET_AUTH_ERROR});
            }
        );
    }
}
