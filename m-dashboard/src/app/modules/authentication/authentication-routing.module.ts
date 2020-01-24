import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { CommonModule } from '@angular/common';
import { HomeComponent } from 'src/app/layouts/home/home.component';
import { LoginComponent } from './login/login.component';



const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    children: [{ path: "", component: LoginComponent }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
