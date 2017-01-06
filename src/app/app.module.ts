import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {AngularFireModule} from 'angularfire2';

export const firebaseConfig = {
  apiKey: "AIzaSyCzCGkdxYH6rzfEuVwrTD2pLKNcJDgYbzw",
  authDomain: "forec-bd810.firebaseapp.com",
  databaseURL: "https://forec-bd810.firebaseio.com",
  storageBucket: "forec-bd810.appspot.com",
  messagingSenderId: "470792256226"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
