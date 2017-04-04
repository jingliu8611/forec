import {RouterModule, Routes, PreloadAllModules} from '@angular/router';
import {HomeComponent} from './core/home/home.component';
import {NgModule} from '@angular/core';

const appRoutes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'stocks', loadChildren: 'app/stocks/stocks.module#StocksModule'},
    {path: 'dashboard', loadChildren: 'app/dashboard/dashboard.module#DashboardModule'},
    {path: 'formulas', loadChildren: 'app/formulas/formulas.module#FormulasModule'},
    {path: '**', redirectTo: '/home'}
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {

}