import { NgModule }                         from '@angular/core';
import { RouterModule, Routes }             from '@angular/router';

import {
  AppComponent,
  PageNotFoundComponent }                   from './containers';;

export const routes: Routes = [
  {
    path: '',
    component: AppComponent,
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
  imports: [ RouterModule.forRoot( routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
