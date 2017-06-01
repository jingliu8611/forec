import {NgModule} from '@angular/core';
import {SymbolSearchComponent} from './symbol-search/symbol-search.component';
import {SymbolSearchYahooAdapter} from './adapters/symbol-search.yahoo.adapter';
import {SymbolSearchService} from './services/symbol-search.service';
import {JsonpModule} from '@angular/http';
import {CommonModule} from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';

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
        TranslateModule,
        SymbolSearchComponent,
        CommonModule
    ]
})
export class SharedModule {

}
