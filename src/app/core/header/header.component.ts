import {Component, OnInit, AfterViewInit} from '@angular/core';
import {AuthService} from '../../shared/services/auth.service';
import {select, NgRedux} from 'ng2-redux';
import {GET_AUTH_REQUEST, NOT_LOGGED_IN, LOGGED_IN, GET_AUTH_ERROR} from '../login/login.actions';
import {IAppState} from '../../store';

declare let $;

@Component({
    selector: 'fc-header',
    templateUrl: 'header.component.html',
    styleUrls: ['header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit {
    @select((s: IAppState) => s.login.authState) authStateA;

    constructor(private authService: AuthService,
                private ngRedux: NgRedux<IAppState>) {
        this.ngRedux.dispatch({type: GET_AUTH_REQUEST});
        this.authService.getAuth().subscribe(
            authState => {
                if (!authState) {
                    console.log('header comp - state - not logged in', authState);
                    this.ngRedux.dispatch({type: NOT_LOGGED_IN});
                } else {
                    console.log('header comp - state - logged in', authState);
                    this.ngRedux.dispatch({type: LOGGED_IN, authState: authState});
                    this.onCloseLoginModal();
                }
            },
            err => {
                console.log('header comp - state - login error', err);
                this.ngRedux.dispatch({type: GET_AUTH_ERROR});
            }
        );
    }

    ngOnInit() {
    }

    ngAfterViewInit() {
        $('.modal').modal();
    }

    onOpenLoginModal() {
        $('#modal1').modal('open');
    }

    onCloseLoginModal() {
        $('#modal1').modal('close');
    }

    onLogout() {
        this.authService.logout().subscribe(
            authState => {
                console.log('header comp - logout success ', authState)
            },
            err => {
                console.log('header comp - logout fail ', err);
            }
        );
    }

    onRegister(email, password) {
        this.authService.register(email, password).subscribe(
            authState => {
                console.log('header comp - register success ', authState)
            },
            err => {
                console.log('header comp - register fail ', err);
            }
        );
    }
}
