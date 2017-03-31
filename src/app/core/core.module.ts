import {NgModule} from "@angular/core";
import {HeaderComponent} from "./header/header.component";
import {HomeComponent} from "./home/home.component";
import {FooterComponent} from "./footer/footer.component";
import {routing} from "../app.routing";
import {LoginComponent} from "./login/login.component";

@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    LoginComponent
  ],
  imports: [
    routing
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class CoreModule {
}
