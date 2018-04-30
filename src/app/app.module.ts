import { BrowserModule }          from '@angular/platform-browser';
import { NgModule }               from '@angular/core';
import { HttpClientModule }       from '@angular/common/http';

import { AppRoutingModule }       from "./app.routing.module";

import { NgxsModule }             from '@ngxs/store';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';

import { states }                 from './app.state';

import {
  AppComponent,
  SearchBarComponent,
  PageNotFoundComponent }         from './containers';

import {
  SearchService }                 from './services';

const DECLARATIONS = [
  AppComponent,
  SearchBarComponent,
  PageNotFoundComponent
]

const PROVIDERS = [
  SearchService
]

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgxsModule.forRoot(states),
    //NgxsLoggerPluginModule.forRoot()
  ],
  declarations: [
    ...DECLARATIONS
  ],
  providers: [
    ...PROVIDERS
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
