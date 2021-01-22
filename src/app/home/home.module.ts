import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DoctorDashboardComponent } from './containers/doctor-dashboard/doctor-dashboard.component';
import { SpecialistDashboardComponent } from './containers/specialist-dashboard/specialist-dashboard.component';
import { PatientDashboardComponent } from './containers/patient-dashboard/patient-dashboard.component';
import { AdminDashboardComponent } from './containers/admin-dashboard/admin-dashboard.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { AppRoutingModule } from '../app-routing.module';
import { BookAppoinmentsComponent } from './containers/book-appoinments/book-appoinments.component';
import { MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { AdminAppoinmentsReviewComponent } from './containers/admin-appoinments-review/admin-appoinments-review.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { SpecialistAppoinmentsReviewComponent } from './containers/specialist-appoinments-review/specialist-appoinments-review.component';
import { AdminViewAppoinmentsComponent } from './containers/admin-view-appoinments/admin-view-appoinments.component';
import { SpecialistViewAppoinmentsComponent } from './containers/specialist-view-appoinments/specialist-view-appoinments.component';
import { AddPatientRecordComponent } from './containers/add-patient-record/add-patient-record.component';
import { ViewPatientRecordsComponent } from './containers/view-patient-records/view-patient-records.component';
import { PatviewPatientRecordsComponent } from './containers/patview-patient-records/patview-patient-records.component';

@NgModule({
  declarations: [
    DoctorDashboardComponent,
    SpecialistDashboardComponent,
    PatientDashboardComponent,
    AdminDashboardComponent,
    BookAppoinmentsComponent,
    AdminAppoinmentsReviewComponent,
    SpecialistAppoinmentsReviewComponent,
    AdminViewAppoinmentsComponent,
    SpecialistViewAppoinmentsComponent,
    AddPatientRecordComponent,
    ViewPatientRecordsComponent,
    PatviewPatientRecordsComponent,
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatSelectModule,
    MatNativeDateModule,
    NgxMaterialTimepickerModule,
    AppRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatRadioModule,
    MatCheckboxModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AdminDashboardComponent]
})
export class HomeModule { }
