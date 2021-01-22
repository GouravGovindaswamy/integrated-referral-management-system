import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AppData } from '../../models/appData';
import { GetAdminAppoinmentReviewService } from '../../services/getAdminAppoinmentReview.service';
import { animate, style, transition, trigger } from '@angular/animations';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { PassConfirmAppService } from '../../services/passConfirmApp.service';
import { AppPassDataSpecialistService } from '../../services/appPassDataSpecialist.service';


@Component({
  selector: 'app-admin-appoinments-review',
  templateUrl: './admin-appoinments-review.component.html',
  styleUrls: ['./admin-appoinments-review.component.css'],
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
export class AdminAppoinmentsReviewComponent implements OnInit {

  constructor(private service: GetAdminAppoinmentReviewService, private passConfirmAppService: PassConfirmAppService, private appPassDataSpecialistService: AppPassDataSpecialistService) {}

  adminAppReviewData;
  ELEMENT_DATA : AppData[];
  showDiv: boolean = true;
  appID:any;
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'attender', 'patient', 'disease', 'department', 'dateofapp', 'timeofapp', 'branch' , 'specialist'];
  dataSource;

  ngOnInit() {
    this.adminAppReviewData = new FormGroup({
      insurance: new FormControl('',[Validators.required]),
    });
    this.getData();
  }

  async getData(){
    this.dataSource = new MatTableDataSource<AppData>(this.ELEMENT_DATA);
    let data = await this.service.getAdminAppReviewData();
    this.dataSource.data = data as AppData[];
  }

  async confirmApp(Data){
    console.log(Data.insurance);
    console.log(this.appID);
    this.passConfirmAppService.confPassAppData({appID: this.appID, patInsurance: Data.insurance});
    let data = await this.service.getAdminAppReviewData();
    this.dataSource.data = data as AppData[];
  }

  getID(Data){
    this.appID = Data;
  }

  async sendSpecialistAppReview(Data){
    console.log(Data.insurance);
    console.log(this.appID);
    this.appPassDataSpecialistService.passAppDataSpecialist({appID: this.appID, patInsurance: Data.insurance});
    let data = await this.service.getAdminAppReviewData();
    this.dataSource.data = data as AppData[];
  }

}
