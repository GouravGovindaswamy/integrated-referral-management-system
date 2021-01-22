import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import{ HttpClient } from '@angular/common/http'
import "../../../../../node_modules/@angular/material/prebuilt-themes/indigo-pink.css";
import { GetAttenderService } from '../../services/getAttender.service';
import { GetDepartmentService } from '../../services/getDepartment.service';
import { PassDepartmentService } from '../../services/passDepartmentservice';
import { GetSpecialistService} from '../../services/getSpecialist.service';
import { AppPassDataAdminService } from '../../services/appPassDataAdmin.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-book-appoinments',
  templateUrl: './book-appoinments.component.html',
  styleUrls: ['./book-appoinments.component.css'],
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
export class BookAppoinmentsComponent implements OnInit {

  constructor(private http: HttpClient, private getAttenderService: GetAttenderService, private getDepartmentService: GetDepartmentService, private passDepartmentService: PassDepartmentService, private getSpecialistService: GetSpecialistService, private appPassDataAdminService: AppPassDataAdminService ) { }

  appData;
  
  showDiv: boolean = true;
  attenderArray:string[] = [];
  departmentArray: string[] = [];
  specialistArray: string[] = [];
  ngOnInit(): void {
    this.appData = new FormGroup({
      attender: new FormControl('',[Validators.required]),
      patient: new FormControl('',[Validators.required]),
      disease: new FormControl('',[Validators.required]),
      department: new FormControl('',[Validators.required]),
      date: new FormControl('',[Validators.required]),
      time: new FormControl('',[Validators.required]),
      branch: new FormControl('',[Validators.required]),
      specialist: new FormControl('',[Validators.required]),
    });
      this.getAttenders();
      this.getDepartments();
  }

  async getAttenders(){
    let tempArray2;
    let tempArray = await this.getAttenderService.getAttenders();
    tempArray2 = Object.keys(tempArray).map(key => (tempArray[key]));
    tempArray2.forEach(element => {
      this.attenderArray.push(element.fullname);
    });
    console.log(this.attenderArray);    
  }  

  async getDepartments(){
    let tempArray2;
    let tempArray = await this.getDepartmentService.getDepartments();
    tempArray2 = Object.keys(tempArray).map(key => (tempArray[key]));
    tempArray2.forEach(element => {
      this.departmentArray.push(element.department);
    });
    console.log(this.departmentArray);    
  }  

  initialiseData(){
    this.appData = new FormGroup({
      attender: new FormControl(''),
      patient: new FormControl(''),
      disease: new FormControl(''),
      department: new FormControl(''),
      date: new FormControl(''),
      time: new FormControl(''),
      branch: new FormControl(''),
      specialist: new FormControl(''),
    });
  }

  passAppoinment(Data){
    this.initialiseData();
    this.appPassDataAdminService.passAppData({attender: Data.attender, patient: Data.patient, disease: Data.disease, department: Data.department, dateofapp: Data.date, timeofapp: Data.time, branch: Data.branch, specialist: Data.specialist});
    Swal.fire({icon: 'success',
    title: 'Success',
    text: 'Appoinemnt is sent for review to the admin',})
  }

  async selectAttender(){
    const {department} = this.appData.value;
    console.log(department);
    this.passDepartmentService.passDepartment({department: department});
    this.getSpecialist();
  }

  async getSpecialist(){
    let tempArray2;
    let tempArray = await this.getSpecialistService.getSpecialists();
    tempArray2 = Object.keys(tempArray).map(key => (tempArray[key]));
    console.log(tempArray2);
    this.specialistArray = [];
    tempArray2.forEach(element => {
      this.specialistArray.push(element.fullname);
      console.log(this.specialistArray);
    });   
  }  
}
