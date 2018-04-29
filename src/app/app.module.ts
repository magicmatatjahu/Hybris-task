import { BrowserModule }          from '@angular/platform-browser';
import { NgModule }               from '@angular/core';
import { HttpClientModule }       from '@angular/common/http';

import { AppRoutingModule }       from "./app.routing.module";

import { NgxsModule }             from '@ngxs/store';

import { states }                 from './app.state';

import {
  AppComponent,
  SearchBarComponent,
  UserProfileComponent,
  PageNotFoundComponent }         from './containers';

import {
  NavigationComponent }           from './components';

const DECLARATIONS = [
  AppComponent,
  SearchBarComponent,
  UserProfileComponent,
  PageNotFoundComponent,
  NavigationComponent
]

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgxsModule.forRoot(states)
  ],
  declarations: [
    ...DECLARATIONS
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
