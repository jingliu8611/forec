import {Routes, RouterModule} from '@angular/router';
import {SettingsComponent} from './settings.component';
const SETTINGS_ROUTES: Routes = [
    {path: '', component: SettingsComponent}
];

export const settingsRouting = RouterModule.forChild(SETTINGS_ROUTES);