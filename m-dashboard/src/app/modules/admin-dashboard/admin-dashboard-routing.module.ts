import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { CommonModule } from '@angular/common';
import { AdminComponent } from 'src/app/layouts/admin/admin.component';
import { ItemsComponent } from './items/items.component';



const routes: Routes = [
  {
    path: "admin",
    component: AdminComponent,
    children: [{ path: "", component: ItemsComponent }]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminDashboardRoutingModule { }
