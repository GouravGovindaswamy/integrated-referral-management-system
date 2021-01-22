import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SpecialistCancelAppService {

  constructor(private http: HttpClient) {}

  async specialistCancelAppData(obj : {appID}){
    console.log(obj);
    let url = 'http://localhost:3000/specialistCancelAppData'; 
    await this.http.post(url, obj).toPromise();
    return 'success';
  }

}