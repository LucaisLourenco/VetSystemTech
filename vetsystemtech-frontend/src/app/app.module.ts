import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ManagementInterceptor} from "./management/services/management-interceptor";
import {NgxPaginationModule} from "ngx-pagination";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxPaginationModule
  ], providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ManagementInterceptor,
      multi: true
    }
  ]
  ,
  bootstrap: [AppComponent],
})
export class AppModule {
}
