import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';

const APP_ROUTES: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'stocks', loadChildren: 'app/stocks/stocks.module#StocksModule'},
  {path: 'dashboard', loadChildren: 'app/dashboard/dashboard.module#DashboardModule'},
  {path: 'formulas', loadChildren: 'app/formulas/formulas.module#FormulasModule'},
  {path: '**', redirectTo: '/home'}
];

export const routing = RouterModule.forRoot(APP_ROUTES);
