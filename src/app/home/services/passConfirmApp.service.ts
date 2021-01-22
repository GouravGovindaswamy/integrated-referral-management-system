import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PassConfirmAppService {

  constructor(private http: HttpClient) {}

  async confPassAppData(obj : {appID, patInsurance}){
    console.log(obj);
    let url = 'http://localhost:3000/passConfAppData'; 
    await this.http.post(url, obj).toPromise();
    return 'success';
  }

}