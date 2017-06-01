import {Component, OnInit, AfterViewInit} from '@angular/core';
import {LANGUAGES} from '../constants/languages';
import {ThemeService} from '../core/services/theme.service';
import {LocaleService} from '../core/services/locale.service';

declare let $;

@Component({
    selector: 'fc-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit, AfterViewInit {
    langs = LANGUAGES;

    constructor(
        private themeService: ThemeService,
        private localeService: LocaleService
    ) {
    }

    ngOnInit() {
    }

    ngAfterViewInit() {
        $('#theme-dropdown').dropdown();
        $('#lang-dropdown').dropdown();
        this.initTabs();

    }

    initTabs() {
        if (this.themeService.getCurrentTheme() === 'theme-1') {
            $('#theme-1-tab').addClass('active');
        } else {
            $('#theme-2-tab').addClass('active');
        }
        if (this.localeService.getCurLang() === 'en' || (this.localeService.getCurLang() === undefined && this.localeService.getDefaultlang() === 'en')) {
            $('#lang-en-tab').addClass('active');
        } else {
            $('#lang-zh-tab').addClass('active');
        }
        $('#lang-tabs, #theme-tabs').tabs();
        $('#lang-tabs > div, #theme-tabs > div').remove();
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
