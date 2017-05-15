import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StocksComponent} from './stocks.component';
import {stocksRouting} from './stocks.routing';
import {SharedModule} from '../shared/shared.module';

@NgModule({
    declarations: [StocksComponent],
    imports: [CommonModule, stocksRouting, SharedModule],
    exports: []
})
export class StocksModule {
}
