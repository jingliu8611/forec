import {NgModule, APP_INITIALIZER} from '@angular/core';
import {HeaderComponent} from './header/header.component';
import {HomeComponent} from './home/home.component';
import {FooterComponent} from './footer/footer.component';
import {LoginComponent} from './login/login.component';
import {CommonModule} from '@angular/common';
import {AppRoutingModule} from '../app-routing.module';
import {NgReduxModule, NgRedux} from 'ng2-redux';
import {AuthService} from '../shared/services/auth.service';
import {FirebaseAdapter} from '../shared/adapters/firebase.adapter';
import {InitService} from '../shared/services/init.service';
import {rootReducer, INITIAL_STATE} from '../store';

export function initFactory (initService: InitService) {
    return () => initService.load();
}

@NgModule({
    declarations: [
        HeaderComponent,
        HomeComponent,
        FooterComponent,
        LoginComponent
    ],
    imports: [
        CommonModule,
        AppRoutingModule
    ],
    providers: [
        AuthService,
        FirebaseAdapter,
        InitService,
        { provide: APP_INITIALIZER,
            useFactory: initFactory,
            deps: [InitService],
            multi: true }
    ],
    exports: [
        AppRoutingModule,
        HeaderComponent,
        FooterComponent,
        NgReduxModule
    ]
})
export class CoreModule {
    constructor(ngRedux: NgRedux<any>) {
        ngRedux.configureStore(rootReducer, INITIAL_STATE);
    }
}
