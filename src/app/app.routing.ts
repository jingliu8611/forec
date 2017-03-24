import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {DashboardComponent} from './dashboard/dashboard.component';


const APP_ROUTES: Routes = [
    {path: 'stocks', loadChildren: 'app/stocks/stocks.module#StocksModule'},
    {path: 'home', component: HomeComponent},
    {path: 'dashboard', component: DashboardComponent},
    {path: '**', redirectTo: '/home'}
];

export const routing = RouterModule.forRoot(APP_ROUTES);
