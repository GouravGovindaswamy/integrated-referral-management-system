import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ViewPatRecordsService{

  constructor(private http: HttpClient) {}


  async viewFullPatRecords(){
    let url = 'http://localhost:3000/viewFullPatRecords';
    console.log(await this.http.get(url).toPromise());
    return await this.http.get(url).toPromise();
  }

  async getPatName(){
    let url = 'http://localhost:3000/getPatName';
    return await this.http.get(url).toPromise();
  }

  async postPatName(obj: {Name}){
    let url = 'http://localhost:3000/passPatientName';
    return await this.http.post(url, obj).toPromise();
  }

  async viewSelectedPatRecords(){
    let url = 'http://localhost:3000/viewSelectedPatRecords';
    return await this.http.get(url).toPromise();
  }

  async viewPatientPatRecords(){
    let url = 'http://localhost:3000/viewPatientPatRecords';
    return await this.http.get(url).toPromise();
  }
}