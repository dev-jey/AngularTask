import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsComponent } from './items/items.component';
import { AdminComponent } from 'src/app/layouts/admin/admin.component';
import { AdminDashboardRoutingModule } from './admin-dashboard-routing.module';



@NgModule({
  declarations: [ItemsComponent, AdminComponent],
  imports: [
    CommonModule,
    AdminDashboardRoutingModule
  ]
})
export class AdminDashboardModule { }
