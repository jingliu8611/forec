import {Component, OnInit} from '@angular/core';
import {ThemeService} from './core/services/theme.service';
import {LocaleService} from './core/services/locale.service';

@Component({
    selector: 'fc-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    constructor(
        // init services
        private themeService: ThemeService,
        private localeService: LocaleService
    ) {
    }

    ngOnInit() {
    }
}
