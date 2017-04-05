import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {AppComponent} from './app.component';
import {AngularFireModule} from 'angularfire2';
import {CoreModule} from './core/core.module';
import {firebaseConfig} from './shared/constants/config';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        CoreModule,
        AngularFireModule.initializeApp(firebaseConfig)
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
