import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {AppComponent} from './app.component';
import {CoreModule} from './core/core.module';
import { SymbolSearchComponent } from './shared/symbol-search/symbol-search.component';

@NgModule({
    declarations: [
        AppComponent,
        SymbolSearchComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        CoreModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
