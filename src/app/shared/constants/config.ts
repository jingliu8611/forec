import {Http} from '@angular/http';
import {TranslateStaticLoader} from 'ng2-translate';

export const firebaseConfig = {
    apiKey: 'AIzaSyCzCGkdxYH6rzfEuVwrTD2pLKNcJDgYbzw',
    authDomain: 'forec-bd810.firebaseapp.com',
    databaseURL: 'https://forec-bd810.firebaseio.com',
    storageBucket: 'forec-bd810.appspot.com',
    messagingSenderId: '470792256226'
};

export function createTranslateLoader(http: Http) {
    return new TranslateStaticLoader(http, './assets/i18n', '.json');
}