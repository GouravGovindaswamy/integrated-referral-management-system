import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SpecialistPassConfirmAppService {

  constructor(private http: HttpClient) {}

  async specialistConfPassAppData(obj : {appID}){
    console.log(obj);
    let url = 'http://localhost:3000/specialistPassConfAppData'; 
    await this.http.post(url, obj).toPromise();
    return 'success';
  }

}