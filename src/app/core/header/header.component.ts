import {Component, OnInit, AfterViewInit} from '@angular/core';
import {AuthService} from '../../shared/services/auth.service';
import {select} from 'ng2-redux';
import {TranslateService} from 'ng2-translate';
import {ThemeService} from '../../shared/services/theme.service';

declare let $;

@Component({
    selector: 'fc-header',
    templateUrl: 'header.component.html',
    styleUrls: ['header.component.scss'],
})
export class HeaderComponent implements OnInit, AfterViewInit {
    // @select((s: IAppState) => s.login.authState) authStateA;
    @select(['login', 'authState']) authStateA;

    constructor(private authService: AuthService,
                private themeService: ThemeService,
                private translateService: TranslateService) {
    }

    ngOnInit() {
    }

    ngAfterViewInit() {
        $('.modal').modal();
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

    onChangeLocale(newLocale: string) {
        this.translateService.setDefaultLang(newLocale);
    }

    onSwitchTheme(themeName: string) {
        this.themeService.switchTheme(themeName);
    }
}
