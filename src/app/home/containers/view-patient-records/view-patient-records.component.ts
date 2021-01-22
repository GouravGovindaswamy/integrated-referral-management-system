import { Component, OnInit } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { MatTableDataSource } from '@angular/material/table';
import {FormControl, FormGroup} from '@angular/forms';
import { PatData } from '../../models/patData';
import { ViewPatRecordsService } from '../../services/viewPatRecords.service';
 
@Component({
  selector: 'app-view-patient-records',
  templateUrl: './view-patient-records.component.html',
  styleUrls: ['./view-patient-records.component.css'],
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
export class ViewPatientRecordsComponent implements OnInit {

  constructor(private service: ViewPatRecordsService) { }

  ELEMENT_DATA : PatData[];
  showDiv: boolean = true;
  displayedColumns = ['id', 'patient_name', 'consultant_type', 'consultant_name', 'description', 'dateofapp', 'timeofapp', 'branch'];
  dataSource;
  patNameData;
  patArray:string[] = [];

  ngOnInit(): void {
    this.getFullData();
    this.getPatName();
    this.patNameData = new FormGroup({
      patientName: new FormControl(''),
    }); 
  }

  async getFullData(){
    this.dataSource = new MatTableDataSource<PatData>(this.ELEMENT_DATA);
    let data = await this.service.viewFullPatRecords();
    this.dataSource.data = data as PatData[];
  }

  async getPatName(){
    let tempArray2;
    let tempArray = await this.service.getPatName();
    tempArray2 = Object.keys(tempArray).map(key => (tempArray[key]));
    this.patArray = [];
    tempArray2.forEach(element => {
       this.patArray.push(element.fullname);
    });
  }

  async getSelectedData(Data){
    this.service.postPatName({Name: Data});
    this.getSelectedPatData();
  }

  async getSelectedPatData(){
    let data = await this.service.viewSelectedPatRecords();
    this.dataSource.data = data as PatData[];
  }
}
