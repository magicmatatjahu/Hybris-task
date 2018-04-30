import { NgModule }                         from '@angular/core';
import { RouterModule, Routes }             from '@angular/router';
import { 
  HttpClient }                              from '@angular/common/http';

import {
  TranslateModule,
  TranslateLoader }                         from '@ngx-translate/core';
import { TranslateHttpLoader }              from '@ngx-translate/http-loader';

import {
  UserProfileComponent,
  InfoComponent,
  RepositoriesComponent,
  LangsComponent }                          from './containers';

export function UserProfileTranslateLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, "./i18n/user-profile/", ".json")
}

const routes: Routes = [{
  path: '',
  component: UserProfileComponent,
  children: [
    {
      path: '',
      redirectTo: 'repositories'
    },
    // {
    //   path: 'info',
    //   component: InfoComponent
    // }, 
    {
      path: 'repositories',
      component: RepositoriesComponent
    }, {
      path: 'langs',
      component: LangsComponent
    }
  ]
}]

@NgModule({
  imports: [ 
    RouterModule.forChild( routes),
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: (UserProfileTranslateLoaderFactory),
        deps: [ HttpClient ]
      },
      isolate: true
    }),
  ],
  exports: [ RouterModule, TranslateModule ]
})
export class UserProfileRoutingModule {}
