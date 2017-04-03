import {Routes, RouterModule} from '@angular/router';
import {FormulasComponent} from './formulas.component';

const FORMULAS_ROUTES: Routes = [
    {path: '', component: FormulasComponent}
];

export const formulasRouting = RouterModule.forChild(FORMULAS_ROUTES);
