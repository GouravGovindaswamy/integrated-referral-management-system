import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class ViewAppoinmentService{

  constructor(private http: HttpClient) {}


  async adminViewAppoinments(){
    let url = 'http://localhost:3000/adminViewAppoinments';
    console.log(await this.http.get(url).toPromise());
    return await this.http.get(url).toPromise();
  }


  async specialistViewAppoinments(){
    let url = 'http://localhost:3000/specialistViewAppoinments';
    console.log(await this.http.get(url).toPromise());
    return await this.http.get(url).toPromise();
  }
}