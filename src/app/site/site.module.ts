import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiteRoutingModule } from './site-routing.module';
import { WebsiteModule } from './website/website.module';
import { SiteComponent } from './site.component';
import { CyclingDistanceComponent } from './website/monthly/cycling-distance/cycling-distance.component';
import { HammerModule } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
  declarations: [SiteComponent, CyclingDistanceComponent],
  imports: [
    CommonModule,
    SiteRoutingModule,
    WebsiteModule,
    CarouselModule
  ],
})

export class SiteModule { }
