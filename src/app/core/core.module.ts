import {NgModule} from '@angular/core';
import {HeaderComponent} from './header/header.component';
import {HomeComponent} from './home/home.component';
import {FooterComponent} from './footer/footer.component';
import {routing} from '../app.routing';
import {LoginComponent} from './login/login.component';
import {CommonModule} from '@angular/common';

@NgModule({
    declarations: [
        HeaderComponent,
        HomeComponent,
        FooterComponent,
        LoginComponent
    ],
    imports: [
        CommonModule,
        routing
    ],
    exports: [
        HeaderComponent,
        FooterComponent
    ]
})
export class CoreModule {
}
