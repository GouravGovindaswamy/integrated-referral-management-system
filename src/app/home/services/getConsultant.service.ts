import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class GetConsultantService {

  constructor(private http: HttpClient) {}

  async passConsultantType(obj : {consultantType: string}){
    console.log(obj.consultantType);
    let url = 'http://localhost:3000/passConsultantType'; 
    return await this.http.post(url, obj).toPromise();
  }

  async getConsultantName(){
    let url = 'http://localhost:3000/getConsultantName'; 
    return await this.http.get(url).toPromise();
  }  

  async passRecord(obj : {patient, consultantType, consultantName, description, dateofapp, timeofapp, branch}){
    console.log(obj);
    let url = 'http://localhost:3000/patPassData'; 
    return await this.http.post(url, obj).toPromise();
  }

}