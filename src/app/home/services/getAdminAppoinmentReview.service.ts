import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class GetAdminAppoinmentReviewService{

  constructor(private http: HttpClient) {}


  async getAdminAppReviewData(){
    let url = 'http://localhost:3000/getAdminAppoinmentReview';
    console.log(await this.http.get(url).toPromise());
    return await this.http.get(url).toPromise();
  }
}