import {Component, OnInit} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {THIRD_PARTIES} from '../../shared/constants/third-party-login';

@Component({
    selector: 'fc-login',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.scss']
})
export class LoginComponent implements OnInit {
    thirdParties = [];

    constructor(private authService: AuthService) {
        this.thirdParties = THIRD_PARTIES;
    }

    ngOnInit() {
    }

    onLogin(email, password) {
        this.authService.login(email, password).subscribe(
            authState => {
                console.log('login comp - login success ', authState)
            },
            err => {
                console.log('login comp - login fail ', err);
            }
        );
    }

    onThirdPartyLogin(thirdPartyName) {
        this.authService.thirdPartyLogin(thirdPartyName).subscribe(
            authState => {
                console.log('login comp - third party login success ', authState)
            },
            err => {
                console.log('login comp - third party login fail ', err);
            }
        );
    }
}
