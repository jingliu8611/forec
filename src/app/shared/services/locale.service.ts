import {TranslateService} from '@ngx-translate/core';
import {Injectable} from '@angular/core';
import {LANGUAGES} from '../constants/languages';

@Injectable()
export class LocaleService {
    constructor(
        private translate: TranslateService
    ) {
        this.translate.setDefaultLang(LANGUAGES.default);
    }

    switchLang(lang: string) {
        this.translate.use(lang);
    }
}