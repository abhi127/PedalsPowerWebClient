import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { CyptolandingComponent } from './site/website/cyptolanding/cyptolanding.component';
import { Page404Component } from './extrapages/page404/page404.component';
import { HomeComponent } from './site/website/home/home.component';
import { IndependenceDayComponent } from './site/website/iday/independence-day/independence-day.component';

const routes: Routes = [
  { path: 'account', loadChildren: () => import('./account/account.module').then(m => m.AccountModule) },
  { path: 'site', loadChildren: () => import('./site/site.module').then(m => m.SiteModule) },

  {
    path: '', component: CyptolandingComponent, children: [
      { path: '', component: HomeComponent },
      { path: '', component: IndependenceDayComponent },
      { path: '', loadChildren: () => import('./site/site.module').then(m => m.SiteModule) },
    ]
  },

  // tslint:disable-next-line: max-line-length
  { path: '**', component: Page404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top', relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
