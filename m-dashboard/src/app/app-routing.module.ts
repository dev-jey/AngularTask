import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './layouts/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

//Lazy loading of routes
const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("./modules/authentication/authentication.module").then(
        m => m.AuthenticationModule
      )
  },
  {
    path: "admin",
    loadChildren: () => import("./modules/admin-dashboard/admin-dashboard.module").then(m => m.AdminDashboardModule)
  },
  {
    path: "**",
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
