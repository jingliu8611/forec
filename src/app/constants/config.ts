import {Http} from '@angular/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

export const firebaseConfig = {
    apiKey: 'AIzaSyCzCGkdxYH6rzfEuVwrTD2pLKNcJDgYbzw',
    authDomain: 'forec-bd810.firebaseapp.com',
    databaseURL: 'https://forec-bd810.firebaseio.com',
    storageBucket: 'forec-bd810.appspot.com',
    messagingSenderId: '470792256226'
};

export function createTranslateLoader(http: Http) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}