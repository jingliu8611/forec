import {NgModule} from '@angular/core';
import {HeaderComponent} from './header/header.component';
import {HomeComponent} from './home/home.component';
import {FooterComponent} from './footer/footer.component';
import {LoginComponent} from './login/login.component';
import {CommonModule} from '@angular/common';
import {AppRoutingModule} from '../app-routing.module';
import {NgReduxModule} from '@angular-redux/store';
import {AuthService} from '../shared/services/auth.service';
import {FirebaseAdapter} from '../shared/adapters/firebase.adapter';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {createTranslateLoader, firebaseConfig} from '../shared/constants/config';
import {Http} from '@angular/http';
import {AngularFireModule} from 'angularfire2';
import {ThemeService} from '../shared/services/theme.service';
import {LocaleService} from '../shared/services/locale.service';
import {AngularFireDatabaseModule} from 'angularfire2/database/database.module';
import {AngularFireAuthModule} from 'angularfire2/auth/auth.module';
import {StoreModule} from './store/store.module';

@NgModule({
    declarations: [
        HeaderComponent,
        HomeComponent,
        FooterComponent,
        LoginComponent
    ],
    imports: [
        CommonModule,
        AppRoutingModule,
        AngularFireModule.initializeApp(firebaseConfig),
        AngularFireDatabaseModule,
        AngularFireAuthModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: (createTranslateLoader),
                deps: [Http]
            }
        })
    ],
    providers: [
        AuthService,
        ThemeService,
        LocaleService,
        FirebaseAdapter
    ],
    exports: [
        AppRoutingModule,
        HeaderComponent,
        FooterComponent,
        NgReduxModule,
        StoreModule,
        TranslateModule
    ]
})
export class CoreModule {
}
