import { Component, OnInit } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { MatTableDataSource } from '@angular/material/table';
import { SpecialistAppData } from '../../models/specialistAppData';
import { ViewAppoinmentService } from '../../services/viewAppoinmentService';

@Component({
  selector: 'app-admin-view-appoinments',
  templateUrl: './admin-view-appoinments.component.html',
  styleUrls: ['./admin-view-appoinments.component.css'],
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
export class AdminViewAppoinmentsComponent implements OnInit {

  constructor( private service: ViewAppoinmentService) { }

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
    let data = await this.service.adminViewAppoinments();
    this.dataSource.data = data as  SpecialistAppData[];
  }

}
