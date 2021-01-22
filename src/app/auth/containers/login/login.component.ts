import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private formBuilder: FormBuilder,private router: Router) { }

  loginData: FormGroup;
  
  ngOnInit(): void {
    this.loginData = this.formBuilder.group({
      username: [''],
      password: ['']
    });
  }

  get f() {
    return this.loginData.controls;
  }

  login(){
    this.authService.login({username: this.f.username.value, password: this.f.password.value})
    .subscribe(success =>{
      this.router.navigate(['/adminHome']);
    })
  }

}
