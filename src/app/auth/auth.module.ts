
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './containers/login/login.component';
import { AuthGuard } from './gaurds/auth.gaurd';
import { AuthService } from './services/auth.service';
import { AdminDashboardGuard } from './gaurds/admindashboard.gaurd';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './token.interceptor';
import { CommonModule } from '@angular/common';
import { DoctorDashboardGuard } from './gaurds/doctordashboard.gaurd';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [
    AuthGuard,
    AuthService,
    AdminDashboardGuard,
    DoctorDashboardGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [LoginComponent]
})
export class AuthModule { }
