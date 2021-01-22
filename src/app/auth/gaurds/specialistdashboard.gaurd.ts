import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { HttpClient } from '@angular/common/http';
import { first, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpecialistDashboardGuard implements CanActivate, CanLoad {

  constructor(private http:  HttpClient, private authService: AuthService, private router: Router) { }

  canActivate() {
    return this.canLoad();
  }

async canLoad() {
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['/login']);
    }
    let _url = 'http://localhost:3000/getUserRole';
    let role = await this.http.get(_url).toPromise();
    console.log(role);
    if(role === 'specialist'){
      return this.authService.isLoggedIn();
    }
    else if(role == 'general physician' || 'nurse' || 'assistants'){
      return this.router.navigate(['/doctorHome']);
    }
    else if(role == 'admin') {
      return this.router.navigate(['/adminHome']);
    }
    else if(role == 'patient'){
      return this.router.navigate(['/patientHome']);
    }
    else{
      return this.router.navigate(['/login']);
    }
  }
}