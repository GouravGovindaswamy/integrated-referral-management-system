import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class GetNameService {

  constructor(private http: HttpClient) {}

  async getUserName(){
    let url = 'http://localhost:3000/getUserName'; 
    let fullname = await this.http.get(url).toPromise();
    return fullname;
  }

}