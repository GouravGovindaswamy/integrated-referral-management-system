import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class GetSpecialistAppoinmentReviewService{

  constructor(private http: HttpClient) {}


  async getSpecialistAppReviewData(){
    let url = 'http://localhost:3000/getSpecialistAppoinmentReview';
    console.log(await this.http.get(url).toPromise());
    return await this.http.get(url).toPromise();
  }
}