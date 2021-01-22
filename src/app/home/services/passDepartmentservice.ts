import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PassDepartmentService {

  constructor(private http: HttpClient) {}

  async passDepartment(obj : {department: string}){
    console.log(obj.department);
    let url = 'http://localhost:3000/passDepartment'; 
    return await this.http.post(url, obj).toPromise();
  }

}