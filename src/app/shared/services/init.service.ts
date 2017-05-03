import {Injectable} from '@angular/core';
import {AuthService} from './auth.service';
import { NgRedux } from '@angular-redux/store';
import {IAppState} from '../../store';
import {NOT_LOGGED_IN, LOGGED_IN, GET_AUTH_ERROR, GET_AUTH_REQUEST} from '../../core/login/login.actions';
import {TranslateService} from 'ng2-translate';

declare let $;

@Injectable()
export class InitService {

    constructor(private authService: AuthService,
                private ngRedux: NgRedux<IAppState>,
                private translate: TranslateService) {
    }

    load() {
        console.log('this is init service!');
        // this gives run time error, why?
        // this.ngRedux.dispatch({type: GET_AUTH_REQUEST});
        this.authService.getAuth().subscribe(
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
        this.translate.setDefaultLang('en');
    }

    private closeLoginModal() {
        $('#modal1').modal('close');
    }
}