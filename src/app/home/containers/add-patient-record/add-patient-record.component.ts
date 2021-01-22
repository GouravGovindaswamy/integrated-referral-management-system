import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import{ HttpClient } from '@angular/common/http'
import "../../../../../node_modules/@angular/material/prebuilt-themes/indigo-pink.css";
import Swal from 'sweetalert2';
import { GetConsultantService } from '../../services/getConsultant.service';

@Component({
  selector: 'app-add-patient-record',
  templateUrl: './add-patient-record.component.html',
  styleUrls: ['./add-patient-record.component.css'],
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
export class AddPatientRecordComponent implements OnInit {
  constructor(private http: HttpClient, private service: GetConsultantService ) { }

  patData;
  
  showDiv: boolean = true;
  consultantArray:string[] = [];
  ngOnInit(): void {
    this.patData = new FormGroup({
      patient: new FormControl('',[Validators.required]),
      consultantType: new FormControl('',[Validators.required]),
      consultantName: new FormControl('',[Validators.required]),
      description: new FormControl('',[Validators.required]),
      date: new FormControl('',[Validators.required]),
      time: new FormControl('',[Validators.required]),
      branch: new FormControl('',[Validators.required]),
    });
  }

  async passConsultantType(){
    const {consultantType} = this.patData.value;
    this.service.passConsultantType({consultantType});
    this.getConsultantName();
  }

  initialiseData(){
    this.patData = new FormGroup({
      patient: new FormControl(''),
      consultantType: new FormControl(''),
      consultantName: new FormControl(''),
      description: new FormControl(''),
      date: new FormControl(''),
      time: new FormControl(''),
      branch: new FormControl(''),
    });
  }

  async getConsultantName(){
    let tempArray2;
    let tempArray = await this.service.getConsultantName();
    tempArray2 = Object.keys(tempArray).map(key => (tempArray[key]));
    this.consultantArray = [];
    tempArray2.forEach(element => {
       this.consultantArray.push(element.fullname);
    });
  }

  passRecord(Data){
    this.initialiseData();
    this.service.passRecord({patient: Data.patient, consultantType: Data.consultantType, consultantName: Data.consultantName, description: Data.description, dateofapp: Data.date, timeofapp: Data.time, branch: Data.branch});
    Swal.fire({icon: 'success',
     title: 'Success',
     text: 'Appoinemnt is sent for review to the admin',});
  }

  // passRecord(Data){
  //   this.initialiseData();
  //   this.appPassDataAdminService.passAppData({attender: Data.attender, patient: Data.patient, disease: Data.disease, department: Data.department, dateofapp: Data.date, timeofapp: Data.time, branch: Data.branch, specialist: Data.specialist});
  //   Swal.fire({icon: 'success',
  //   title: 'Success',
  //   text: 'Appoinemnt is sent for review to the admin',})
  // }
}
