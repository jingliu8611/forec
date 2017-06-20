import {Component, OnInit, AfterViewInit} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {select} from '@angular-redux/store/lib/src/decorators/select';
import {trigger, state, style, transition, animate} from '@angular/animations';

declare let $;

@Component({
    selector: 'fc-header',
    templateUrl: 'header.component.html',
    styleUrls: ['header.component.scss'],
    animations: [
        trigger('loginDisplay', [
            state('login', style({
                transform: 'translateX(0)'
            })),
            state('register', style({
                transform: 'translateX(calc(100% + 24px))'
            })),
            transition('login <=> register', animate(300)),
        ]),
        trigger('registerDisplay', [
            state('login', style({
                transform: 'translateX(24px)'
            })),
            state('register', style({
                transform: 'translateX(-100%)'
            })),
            transition('login <=> register', animate(300)),
        ]),
        trigger('loginBtn', [
            state('login', style({
                transform: 'translateX(0)',
                opacity: 1,
                background: 'rgba(0,0,0,0.12)'
            })),
            state('register', style({
                transform: 'translateX(100%)',
                opacity: 0.64,
                background: 'transparent'
            })),
            transition('login <=> register', animate(300)),
        ]),
        trigger('registerBtn', [
            state('login', style({
                transform: 'translateX(0)',
                opacity: 0.64,
                background: 'transparent'
            })),
            state('register', style({
                transform: 'translateX(-100%)',
                opacity: 1,
                background: 'rgba(0,0,0,0.12)'
            })),
            transition('login <=> register', animate(300)),
        ])
    ]
})
export class HeaderComponent implements OnInit, AfterViewInit {
    // @select((s: IAppState) => s.login.authState) authStateA;
    @select(['login', 'authState']) authStateA;
    displayContent = 'login';

    constructor(private authService: AuthService) {
    }

    ngOnInit() {
    }

    ngAfterViewInit() {
       this.initMaterializeComponents();
    }

    initMaterializeComponents() {
        $('#login-modal').modal();
        $(".button-collapse").sideNav(
            {
                closeOnClick: true
            }
        );
    }

    onOpenLoginModal() {
        $('#login-modal').modal('open');
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
}
