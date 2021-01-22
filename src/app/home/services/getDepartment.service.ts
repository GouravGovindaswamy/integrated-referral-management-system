import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class GetDepartmentService {

  constructor(private http: HttpClient) {}

  async getDepartments(){
    let url = 'http://localhost:3000/getDepartments'; 
    let array = await this.http.get(url).toPromise();
    return array;
  }

}