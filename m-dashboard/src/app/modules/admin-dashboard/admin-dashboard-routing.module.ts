import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { AdminComponent } from 'src/app/layouts/admin/admin.component';
import { ItemsComponent } from './items/items.component';
import { ProductsComponent } from './products/products.component';
import { Products1Component } from './products1/products1.component';
import { Products2Component } from './products2/products2.component';



const routes: Routes = [
  {
    path: "dashboard",
    component: AdminComponent,
    children: [{ path: "", component: ItemsComponent }]
  },
  {
    path: "page1",
    component: AdminComponent,
    children: [{ path: "", component: ProductsComponent }]
  },
  {
    path: "page2",
    component: AdminComponent,
    children: [{ path: "", component: Products1Component }]
  },
  {
    path: "page3",
    component: AdminComponent,
    children: [{ path: "", component: Products2Component }]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminDashboardRoutingModule { }
