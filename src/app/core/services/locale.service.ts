import {TranslateService} from '@ngx-translate/core';
import {Injectable} from '@angular/core';
import {LANGUAGES} from '../../constants/languages';

@Injectable()
export class LocaleService {
    constructor(
        private translate: TranslateService
    ) {
        this.translate.setDefaultLang(LANGUAGES.defaultLang);
    }

    switchLang(lang: string) {
        this.translate.use(lang);
    }

    getCurLang() {
        return this.translate.currentLang;
    }

    getDefaultlang() {
        return this.translate.defaultLang;
    }
}
