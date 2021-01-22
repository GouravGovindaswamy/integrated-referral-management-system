import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AppPassDataAdminService {

  constructor(private http: HttpClient) {}

  async passAppData(obj : {attender, patient, disease, department, dateofapp, timeofapp, branch, specialist }){
    console.log(obj);
    let url = 'http://localhost:3000/appPassDataAdmin'; 
    return await this.http.post(url, obj).toPromise();
  }

}