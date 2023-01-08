import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { UsersModule } from './users/users.module';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  {
    path: 'user',
    loadChildren: () => import('./users/users.module').then((m) => UsersModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
