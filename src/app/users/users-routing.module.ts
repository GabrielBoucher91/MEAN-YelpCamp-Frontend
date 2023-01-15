import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  {
    path: '',
    component: UserHomeComponent,
    children: [
      { path: '', redirectTo: 'signup', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'signup', component: SignupComponent },
      { path: ':id', component: UserProfileComponent },
      { path: ':id/dashboard', component: UserDashboardComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
