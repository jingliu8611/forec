import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StocksComponent} from './stocks.component';
import {stocksRouting} from './stocks.routing';

@NgModule({
    declarations: [StocksComponent],
    imports: [CommonModule, stocksRouting],
    exports: []
})
export class StocksModule {
}