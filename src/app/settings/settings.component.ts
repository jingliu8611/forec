import {Component, OnInit} from '@angular/core';
import {LANGUAGES} from '../constants/languages';
import {ThemeService} from '../core/services/theme.service';
import {LocaleService} from '../core/services/locale.service';

declare let $;

@Component({
    selector: 'fc-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
    langs = LANGUAGES;

    constructor(
        private themeService: ThemeService,
        private localeService: LocaleService
    ) {
    }

    ngOnInit() {
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
