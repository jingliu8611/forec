import { NgModule } from '@angular/core';
import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store';
import {IAppState} from './store';
import {rootReducer} from './store';

@NgModule({
    imports: [NgReduxModule]
})
export class StoreModule {
    constructor(
        public store: NgRedux<IAppState>,
        devTools: DevToolsExtension
    ) {
        store.configureStore(
            rootReducer,
            {},
            null,
            devTools.isEnabled() ? [ devTools.enhancer() ] : []);
    }
}
