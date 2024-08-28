import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollspyDirective } from './scrollspy.directive'
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
// import { createTranslateLoader } from 'src/app/app.module';
import { CyptolandingComponent } from '../cyptolanding.component';
import { RouterModule } from '@angular/router';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

export function createTranslateLoader(http: HttpClient): any {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}

@NgModule({
    declarations: [ScrollspyDirective, CyptolandingComponent],
    imports: [
        CommonModule,
        RouterModule,
        TranslateModule.forRoot({
            loader: {
              provide: TranslateLoader,
              useFactory: createTranslateLoader,
              deps: [HttpClient]
            }
          }),
          NgbDropdownModule
    ],
    exports: [ScrollspyDirective]
})
export class SharedModule { }
