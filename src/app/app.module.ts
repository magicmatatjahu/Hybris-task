import { BrowserModule }          from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpClientModule }       from '@angular/common/http';

import { AppRoutingModule }       from "./app.routing.module";

import { NgxsModule }             from '@ngxs/store';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';

import { ErrorsHandler }          from './common/errorHandlers';

import { states }                 from './app.state';

import {
  AppComponent,
  MainComponent,
  ErrorComponent,
  PageNotFoundComponent }         from './containers';

import {
  SearchBarComponent }            from './components';

import {
  SearchService }                 from './services';

const DECLARATIONS = [
  AppComponent,
  MainComponent,
  ErrorComponent,
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
    ...PROVIDERS,
    {
      provide: ErrorHandler,
      useClass: ErrorsHandler
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
