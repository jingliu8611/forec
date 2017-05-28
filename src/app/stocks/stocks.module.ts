import {NgModule} from '@angular/core';
import {StocksComponent} from './stocks.component';
import {stocksRouting} from './stocks.routing';
import {SharedModule} from '../shared/shared.module';

@NgModule({
    declarations: [StocksComponent],
    imports: [stocksRouting, SharedModule],
    exports: []
})
export class StocksModule {
}
