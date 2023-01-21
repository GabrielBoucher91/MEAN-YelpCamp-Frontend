import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CampgroundHomeComponent } from './campground-home/campground-home.component';
import { CampgroundComponent } from './campground/campground.component';
import { CampgroundsComponent } from './campgrounds/campgrounds.component';

const routes: Routes = [
  {
    path: '',
    component: CampgroundHomeComponent,
    children: [
      { path: '', component: CampgroundsComponent, pathMatch: 'full' },
      { path: ':id', component: CampgroundComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CampgroundsRoutingModule {}
