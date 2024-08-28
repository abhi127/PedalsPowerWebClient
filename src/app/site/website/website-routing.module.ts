import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndependenceDayComponent } from './iday/independence-day/independence-day.component';
import { HomeComponent } from './home/home.component';
import { CyclingDistanceComponent } from './monthly/cycling-distance/cycling-distance.component';
import { RunWalkDistanceComponent } from './monthly/run-walk-distance/run-walk-distance.component';
import { CentuaryCyclingComponent } from './oneday/centuary-cycling/centuary-cycling.component';
import { HallOfFameComponent } from './gallery/hall-of-fame/hall-of-fame.component';
import { CyclingTripComponent } from './gallery/cycling-trip/cycling-trip.component';
import { OurStoryComponent } from './our-story/our-story.component';
import { RunDistanceComponent } from './run-distance/run-distance.component';
import { WalkDistanceComponent } from './walk-distance/walk-distance.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'challenges/iday/independence',
    component: IndependenceDayComponent
  },

  {
    path: 'challenges/monthly/cycling-challenge',
    component: CyclingDistanceComponent
  },

  {
    path: 'challenges/monthly/run-challenge',
    component: RunDistanceComponent
  },

  {
    path: 'challenges/monthly/walk-challenge',
    component: WalkDistanceComponent
  },

  {
    path: 'challenges/oneday/century-or-half-century',
    component: CentuaryCyclingComponent
  },

  {
    path: 'gallery/hall-of-fame',
    component: HallOfFameComponent
  },

  {
    path: 'gallery/cycling-trip',
    component: CyclingTripComponent
  },

  {
    path: 'our-story',
    component: OurStoryComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebsiteRoutingModule { }
