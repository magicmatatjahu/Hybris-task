import { BrowserModule }          from '@angular/platform-browser';
import { NgModule }               from '@angular/core';

import { AppRoutingModule }       from "./app.routing.module";

import {
  AppComponent,
  PageNotFoundComponent }         from './containers';

const CONTAINERS = [
  AppComponent,
  PageNotFoundComponent
]

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  declarations: [
    ...CONTAINERS
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
