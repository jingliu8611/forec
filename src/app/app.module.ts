import {BrowserModule} from '@angular/platform-browser';
import {NgModule, APP_INITIALIZER} from '@angular/core';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {AngularFireModule} from 'angularfire2';
import {AuthService} from './shared/services/auth.service';
import {NgRedux, NgReduxModule} from 'ng2-redux';

import {rootReducer, INITIAL_STATE} from './store';
import {CoreModule} from './core/core.module';
import {FirebaseAdapter} from './shared/adapters/firebase.adapter';
import {AppRoutingModule} from './app-routing.module';
import {InitService} from "./shared/services/init.service";

export const firebaseConfig = {
    apiKey: 'AIzaSyCzCGkdxYH6rzfEuVwrTD2pLKNcJDgYbzw',
    authDomain: 'forec-bd810.firebaseapp.com',
    databaseURL: 'https://forec-bd810.firebaseio.com',
    storageBucket: 'forec-bd810.appspot.com',
    messagingSenderId: '470792256226'
};

export function initFactory (initService: InitService) {
    return () => initService.load();
}

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        NgReduxModule,
        AppRoutingModule,
        CoreModule,
        AngularFireModule.initializeApp(firebaseConfig)
    ],
    providers: [
        InitService,
        AuthService,
        FirebaseAdapter,
        { provide: APP_INITIALIZER,
            useFactory: initFactory,
            deps: [InitService],
            multi: true }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor(ngRedux: NgRedux<any>) {
        ngRedux.configureStore(rootReducer, INITIAL_STATE);
    }
}
