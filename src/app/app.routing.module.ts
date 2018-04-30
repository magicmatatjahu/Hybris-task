import { NgModule }                         from '@angular/core';
import { RouterModule, Routes }             from '@angular/router';
import { HttpClient }                       from '@angular/common/http';

import {
  TranslateModule,
  TranslateLoader }                         from '@ngx-translate/core';
import { TranslateHttpLoader }              from '@ngx-translate/http-loader';

import {
  PageNotFoundComponent }                   from './containers';

import {
  UserProfileComponent }                    from './modules/user-profile/containers';

export function AppTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './i18n/', '.json');
}

export const routes: Routes = [
  {
    path: '',
    component: PageNotFoundComponent,
    pathMatch: 'full'
  }, {
    path: 'users/:user',
    loadChildren: './modules/user-profile/user-profile.module#UserProfileModule'
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
      },
      isolate: true
    })
  ],
  exports: [ RouterModule, TranslateModule ]
})
export class AppRoutingModule {}
