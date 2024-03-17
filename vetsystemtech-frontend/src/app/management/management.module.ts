import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './components/home/home.component';
import { UserLoginComponent } from './components/user/user-login/user-login.component';
import { ManagementRoutingModule } from './management-routing.module';
import { ManagementComponent } from './management.component';
import { UserResetPasswordComponent } from './components/user/user-reset-password/user-reset-password.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import {ManagementInterceptor} from "./services/management-interceptor";
import {HTTP_INTERCEPTORS} from "@angular/common/http";

@NgModule({
  declarations: [
    ManagementComponent,
    UserLoginComponent,
    HomeComponent,
    UserResetPasswordComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule,
    ReactiveFormsModule,
    SharedModule,
    ManagementRoutingModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ManagementInterceptor,
      multi: true
    }
  ]
})
export class ManagementModule { }
