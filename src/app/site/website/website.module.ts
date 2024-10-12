import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebsiteRoutingModule } from './website-routing.module';
import { IndependenceDayComponent } from './iday/independence-day/independence-day.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { RunWalkDistanceComponent } from './monthly/run-walk-distance/run-walk-distance.component';
import { CentuaryCyclingComponent } from './oneday/centuary-cycling/centuary-cycling.component';
import { HallOfFameComponent } from './gallery/hall-of-fame/hall-of-fame.component';
import { CyclingTripComponent } from './gallery/cycling-trip/cycling-trip.component';
import { OurStoryComponent } from './our-story/our-story.component';
import { GalleryLightboxComponent } from './gallery-lightbox/gallery-lightbox.component';
import { RunDistanceComponent } from './run-distance/run-distance.component';
import { WalkDistanceComponent } from './walk-distance/walk-distance.component';
import { RefundPolicyComponent } from './refund-policy/refund-policy.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TermsComponent } from './terms/terms.component';


@NgModule({
  declarations: [IndependenceDayComponent, HomeComponent, RunWalkDistanceComponent, 
    CentuaryCyclingComponent, HallOfFameComponent, CyclingTripComponent, OurStoryComponent, 
    GalleryLightboxComponent, RunDistanceComponent, WalkDistanceComponent, 
    RefundPolicyComponent, PrivacyPolicyComponent, TermsComponent],
  imports: [
    CommonModule,
    WebsiteRoutingModule,
    RouterModule,
    CarouselModule   
  ],
  exports: [
    GalleryLightboxComponent  
  ],
})
export class WebsiteModule { }
