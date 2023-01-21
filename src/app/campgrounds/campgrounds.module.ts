import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CampgroundsRoutingModule } from './campgrounds-routing.module';
import { CampgroundHomeComponent } from './campground-home/campground-home.component';
import { CampgroundComponent } from './campground/campground.component';
import { CampgroundsComponent } from './campgrounds/campgrounds.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    CampgroundHomeComponent,
    CampgroundComponent,
    CampgroundsComponent,
  ],
  imports: [CommonModule, CampgroundsRoutingModule, SharedModule],
})
export class CampgroundsModule {}
