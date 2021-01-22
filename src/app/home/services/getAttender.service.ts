import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class GetAttenderService {

  constructor(private http: HttpClient) {}

  async getAttenders(){
    let url = 'http://localhost:3000/getAttenders'; 
    let array = await this.http.get(url).toPromise();
    return array;
  }

}