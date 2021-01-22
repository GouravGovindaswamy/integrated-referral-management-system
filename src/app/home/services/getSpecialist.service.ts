import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class GetSpecialistService {

  constructor(private http: HttpClient) {}

  async getSpecialists(){
    let url = 'http://localhost:3000/getSpecialist'; 
    let array = await this.http.get(url).toPromise();
    return array;
  }

}