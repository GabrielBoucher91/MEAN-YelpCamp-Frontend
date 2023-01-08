import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UserHomeComponent } from './user-home/user-home.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    UserHomeComponent,
    SignupComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
