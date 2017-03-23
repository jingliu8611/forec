import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import {AngularFireModule} from 'angularfire2';
import {AuthService} from './shared/services/auth.service';
import {HeaderComponent} from './header/header.component';
import {NgRedux, NgReduxModule} from 'ng2-redux';

import {rootReducer, INITIAL_STATE} from './store';
import {LoginComponent} from './login/login.component';

export const firebaseConfig = {
  apiKey: 'AIzaSyCzCGkdxYH6rzfEuVwrTD2pLKNcJDgYbzw',
  authDomain: 'forec-bd810.firebaseapp.com',
  databaseURL: 'https://forec-bd810.firebaseio.com',
  storageBucket: 'forec-bd810.appspot.com',
  messagingSenderId: '470792256226'
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgReduxModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<any>) {
     ngRedux.configureStore(rootReducer, INITIAL_STATE);
  }
}
