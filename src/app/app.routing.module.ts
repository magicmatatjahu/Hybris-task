import { NgModule }                         from '@angular/core';
import { RouterModule, Routes }             from '@angular/router';
import { HttpClient }                       from '@angular/common/http';

import {
  TranslateModule,
  TranslateLoader }                         from '@ngx-translate/core';
import { TranslateHttpLoader }              from '@ngx-translate/http-loader';

import {
  UserProfileComponent,
  PageNotFoundComponent }                   from './containers';

export function AppTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './i18n/', '.json');
}

export const routes: Routes = [
  {
    path: '',
    component: UserProfileComponent,
    pathMatch: 'full',
  }, {
    path: '404',
    component: PageNotFoundComponent
  }, {
    path: '**',
    redirectTo: '404'
  }
];

@NgModule({
  imports: [ 
    RouterModule.forRoot( routes),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (AppTranslateLoader),
        deps: [HttpClient]
      }
    })
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
