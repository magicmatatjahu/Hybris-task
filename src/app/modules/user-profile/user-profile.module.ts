import { NgModule }               from '@angular/core';
import { CommonModule }           from '@angular/common';

import { NgxsModule }             from '@ngxs/store';

import { 
  UserProfileRoutingModule }      from "./user-profile.routing.module";

import { states }                 from './user-profile.state';

import {
  UserProfileComponent,
  InfoComponent,
  RepositoriesComponent,
  LangsComponent }                from './containers';

import {
  NavigationComponent,
  BasicInfoComponent }            from './components';

import {
  UserProfileService }            from './services';

const DECLARATIONS = [
  UserProfileComponent,
  InfoComponent,
  RepositoriesComponent,
  LangsComponent,
  NavigationComponent,
  BasicInfoComponent
]

const PROVIDERS = [
  UserProfileService
]

@NgModule({
  imports: [
    CommonModule,
    UserProfileRoutingModule,
    NgxsModule.forFeature( states)
  ],
  declarations: [
    ...DECLARATIONS
  ],
  providers: [
    ...PROVIDERS
  ]
})
export class UserProfileModule { }
