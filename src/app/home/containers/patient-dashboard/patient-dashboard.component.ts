import { Component, OnInit  } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { GetNameService } from '../../services/getName.service';
import { AuthService } from '../../../auth/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient-dashboard',
  templateUrl: './patient-dashboard.component.html',
  styleUrls: ['./patient-dashboard.component.css']
})
export class PatientDashboardComponent implements OnInit{

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, private _http: HttpClient, private getNameService: GetNameService, private authService: AuthService, private router: Router) {}

  fullname;

  async ngOnInit(){
    this.fullname = await this.getNameService.getUserName();
    console.log(this.fullname);
  }

  logout() {
    this.authService.logout()
    .subscribe(success =>{
      if(success){
        this.router.navigate(['/login'])
      }
    });
  }
  
}
