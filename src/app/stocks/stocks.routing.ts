import {Routes, RouterModule} from '@angular/router';
import {StocksComponent} from './stocks.component';

const STOCK_ROUTES: Routes = [
    {path: '', component: StocksComponent}
];

export const stocksRouting = RouterModule.forChild(STOCK_ROUTES);