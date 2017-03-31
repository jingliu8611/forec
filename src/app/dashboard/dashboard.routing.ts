import {Routes, RouterModule} from "@angular/router";
import {DashboardComponent} from "./dashboard.component";

const DASHBOARD_ROUTES: Routes = [
  {path: '', component: DashboardComponent}
];

export const dashboardRouting = RouterModule.forChild(DASHBOARD_ROUTES);
