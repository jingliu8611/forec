import {NgModule} from '@angular/core';
import {HeaderComponent} from './header/header.component';
import {HomeComponent} from './home/home.component';
import {FooterComponent} from './footer/footer.component';
import {LoginComponent} from './login/login.component';
import {CommonModule} from '@angular/common';
import {AppRoutingModule} from '../app-routing.module';
import {NgReduxModule} from '@angular-redux/store';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {createTranslateLoader, firebaseConfig} from '../constants/config';
import {Http} from '@angular/http';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database/database.module';
import {AngularFireAuthModule} from 'angularfire2/auth/auth.module';
import {StoreModule} from './store/store.module';
import {AuthService} from './services/auth.service';
import {LocaleService} from './services/locale.service';
import {FirebaseAdapter} from './adapters/auth.firebase.adapter';
import {ThemeService} from './services/theme.service';

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
