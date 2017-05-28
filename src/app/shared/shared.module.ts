import {NgModule} from '@angular/core';
import {SymbolSearchComponent} from './symbol-search/symbol-search.component';
import {SymbolSearchYahooAdapter} from './adapters/symbol-search.yahoo.adapter';
import {SymbolSearchService} from './services/symbol-search.service';
import {JsonpModule} from '@angular/http';
import {CommonModule} from '@angular/common';

@NgModule({
    declarations: [
        SymbolSearchComponent
    ],
    imports: [
        JsonpModule,
        CommonModule
    ],
    providers: [
        SymbolSearchYahooAdapter,
        SymbolSearchService
    ],
    exports: [
        SymbolSearchComponent,
        CommonModule
    ]
})
export class SharedModule {

}
