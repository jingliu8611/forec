import {Component, OnInit} from '@angular/core';
import {AuthService} from '../services/auth.service';

@Component({
    selector: 'fc-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

    constructor(
        private authService: AuthService
    ) {
    }

    ngOnInit() {
    }

    onRegister(email, password, displayName) {
        this.authService.register(email, password, displayName).subscribe(
            authState => {
                console.log('header comp - register success ', authState)
            },
            err => {
                console.log('header comp - register fail ', err);
            }
        );
    }
}
