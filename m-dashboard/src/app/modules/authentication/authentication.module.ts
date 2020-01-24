import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from 'src/app/layouts/home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthenticationRoutingModule } from './authentication-routing.module';


@NgModule({
  declarations: [HomeComponent,LoginComponent],
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule,
    AuthenticationRoutingModule,
    RouterModule
  ]
})
export class AuthenticationModule { 
  
}
