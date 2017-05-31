import {NgModule} from '@angular/core';
import {SettingsComponent} from './settings.component';
import {settingsRouting} from './settings.routing';
import {SharedModule} from '../shared/shared.module';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
    declarations: [SettingsComponent],
    imports: [settingsRouting, SharedModule,
        TranslateModule],
    exports: []
})
export class StocksModule {
}