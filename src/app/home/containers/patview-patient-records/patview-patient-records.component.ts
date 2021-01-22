import { Component, OnInit } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { MatTableDataSource } from '@angular/material/table';
import {FormControl, FormGroup} from '@angular/forms';
import { PatData } from '../../models/patData';
import { ViewPatRecordsService } from '../../services/viewPatRecords.service';

@Component({
  selector: 'app-patview-patient-records',
  templateUrl: './patview-patient-records.component.html',
  styleUrls: ['./patview-patient-records.component.css'],
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
export class PatviewPatientRecordsComponent implements OnInit {

  constructor(private service: ViewPatRecordsService) { }

  ELEMENT_DATA : PatData[];
  showDiv: boolean = true;
  displayedColumns = ['id', 'patient_name', 'consultant_type', 'consultant_name', 'description', 'dateofapp', 'timeofapp', 'branch'];
  dataSource;
  patNameData;

  ngOnInit(): void {
    this.getData();
  }

  async getData(){
    this.dataSource = new MatTableDataSource<PatData>(this.ELEMENT_DATA);
    let data = await this.service.viewPatientPatRecords();
    this.dataSource.data = data as PatData[];
  }

}
