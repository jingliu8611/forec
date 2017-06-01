import {NgModule} from '@angular/core';
import {SettingsComponent} from './settings.component';
import {settingsRouting} from './settings.routing';
import {SharedModule} from '../shared/shared.module';

@NgModule({
    declarations: [SettingsComponent],
    imports: [settingsRouting, SharedModule],
    exports: []
})
export class StocksModule {
}