import {Component, OnInit, AfterViewInit} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {select} from '@angular-redux/store/lib/src/decorators/select';
import {ThemeService} from '../services/theme.service';
import {LocaleService} from '../services/locale.service';
import {LANGUAGES} from '../../constants/languages';

declare let $;

@Component({
    selector: 'fc-header',
    templateUrl: 'header.component.html',
    styleUrls: ['header.component.scss'],
})
export class HeaderComponent implements OnInit, AfterViewInit {
    // @select((s: IAppState) => s.login.authState) authStateA;
    @select(['login', 'authState']) authStateA;
    langs = LANGUAGES;

    constructor(private authService: AuthService,
                private themeService: ThemeService,
                private localeService: LocaleService) {
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

    onChangeLocale(lang: string) {
        this.localeService.switchLang(lang);
    }

    onSwitchTheme(themeName: string) {
        this.themeService.switchTheme(themeName);
        this.toggleRedLine(themeName);
    }

    toggleRedLine(themeName) {
        let elem = $('#thin-red-line');
        if (themeName === 'theme-2') {
            let width = 1;
            let id = setInterval(() => {
                if (width >= 100) {
                    clearInterval(id);
                } else {
                    width++;
                    elem.width(width + '%');
                }
            }, 10);
        } else {
            let width = 100;
            let id = setInterval(() => {
                if (width <= 0) {
                    clearInterval(id);
                } else {
                    width--;
                    elem.width(width + '%');
                }
            }, 10);
        }
    }
}
