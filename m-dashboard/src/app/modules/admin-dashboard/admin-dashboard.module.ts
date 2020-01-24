import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsComponent } from './items/items.component';
import { AdminComponent } from 'src/app/layouts/admin/admin.component';
import { AdminDashboardRoutingModule } from './admin-dashboard-routing.module';
import { ProductsComponent } from './products/products.component';
import { Products1Component } from './products1/products1.component';
import { Products2Component } from './products2/products2.component';



@NgModule({
  declarations: [ItemsComponent, AdminComponent, ProductsComponent, Products1Component, Products2Component],
  imports: [
    CommonModule,
    AdminDashboardRoutingModule
  ]
})
export class AdminDashboardModule { }
