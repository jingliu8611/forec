import {Component, OnInit, AfterViewInit} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {select} from '@angular-redux/store/lib/src/decorators/select';

declare let $;

@Component({
    selector: 'fc-header',
    templateUrl: 'header.component.html',
    styleUrls: ['header.component.scss'],
})
export class HeaderComponent implements OnInit, AfterViewInit {
    // @select((s: IAppState) => s.login.authState) authStateA;
    @select(['login', 'authState']) authStateA;

    constructor(private authService: AuthService) {
    }

    ngOnInit() {
    }

    ngAfterViewInit() {
        $('.modal').modal();
        $(".button-collapse").sideNav(
            {
                closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
            }
        );
    }

    onOpenLoginModal() {
        $('#modal1').modal('open');
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
