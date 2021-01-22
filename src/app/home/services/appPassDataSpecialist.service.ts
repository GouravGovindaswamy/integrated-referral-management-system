import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AppPassDataSpecialistService {

  constructor(private http: HttpClient) {}

  async passAppDataSpecialist(obj : {appID, patInsurance}){
    console.log(obj);
    let url = 'http://localhost:3000/appPassDataSpecialist'; 
    await this.http.post(url, obj).toPromise();
    return 'success';
  }

}