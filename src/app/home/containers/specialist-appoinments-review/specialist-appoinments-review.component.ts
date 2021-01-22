import { Component, OnInit } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { MatTableDataSource } from '@angular/material/table';
import { SpecialistAppData } from '../../models/specialistAppData';
import { GetSpecialistAppoinmentReviewService } from '../../services/getSpecialistAppoinmentReview';
import { SpecialistPassConfirmAppService} from '../../services/specialistPassConfirmApp.service';
import { SpecialistCancelAppService} from '../../services/specialistCancelApp.service';

@Component({
  selector: 'app-specialist-appoinments-review',
  templateUrl: './specialist-appoinments-review.component.html',
  styleUrls: ['./specialist-appoinments-review.component.css'],
  animations:[
    trigger('flyInOut', [
      transition('void => *', [
        style({transform: 'translateY(100%)'}),
        animate('1s')
      ]),
      transition('* => void', [
        animate('1s', style({transform: 'translateY(-100%)'}))
      ])
    ])
  ]
})
export class SpecialistAppoinmentsReviewComponent implements OnInit {

  constructor(private getSpecialistAppoinmentReview: GetSpecialistAppoinmentReviewService, private specialistPassConfAppService: SpecialistPassConfirmAppService, private cancelService: SpecialistCancelAppService) { }

  specialistAppReviewData;
  ELEMENT_DATA : SpecialistAppData[];
  showDiv: boolean = true;
  appID:any;
  displayedColumns = ['id', 'attender', 'patient', 'disease', 'department', 'dateofapp', 'timeofapp', 'branch' , 'specialist', 'insurance'];
  dataSource;

  ngOnInit(): void {
    this.getData();
  }

  async getData(){
    this.dataSource = new MatTableDataSource<SpecialistAppData>(this.ELEMENT_DATA);
    let data = await this.getSpecialistAppoinmentReview.getSpecialistAppReviewData();
    this.dataSource.data = data as  SpecialistAppData[];
  }

  getID(Data){
    this.appID = Data;
  }

  async confirmApp(){
    console.log(this.appID);
    this.specialistPassConfAppService.specialistConfPassAppData({appID: this.appID})
    let data = await this.getSpecialistAppoinmentReview.getSpecialistAppReviewData();
    this.dataSource.data = data as  SpecialistAppData[];
  }

  async cancelApp(){
    console.log(this.appID);
    this.cancelService.specialistCancelAppData({appID: this.appID});
    let data = await this.getSpecialistAppoinmentReview.getSpecialistAppReviewData();
    this.dataSource.data = data as  SpecialistAppData[];
  }

}
