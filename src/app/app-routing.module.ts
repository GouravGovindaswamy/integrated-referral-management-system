import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/containers/login/login.component';
import { AuthGuard } from './auth/gaurds/auth.gaurd';
import { DoctorDashboardGuard } from './auth/gaurds/doctordashboard.gaurd';
import { AdminDashboardGuard } from './auth/gaurds/admindashboard.gaurd';
import { DoctorDashboardComponent } from './home/containers/doctor-dashboard/doctor-dashboard.component';
import { SpecialistDashboardComponent } from './home/containers/specialist-dashboard/specialist-dashboard.component';
import { SpecialistDashboardGuard } from './auth/gaurds/specialistdashboard.gaurd';
import { PatientDashboardComponent } from './home/containers/patient-dashboard/patient-dashboard.component';
import { PatientDashboardGuard } from './auth/gaurds/patientdashboard.gaurd';
import { AdminDashboardComponent } from './home/containers/admin-dashboard/admin-dashboard.component';
import { BookAppoinmentsComponent } from './home/containers/book-appoinments/book-appoinments.component';
import { AdminAppoinmentsReviewComponent } from './home/containers/admin-appoinments-review/admin-appoinments-review.component';
import { SpecialistAppoinmentsReviewComponent } from './home/containers/specialist-appoinments-review/specialist-appoinments-review.component';
import { AdminViewAppoinmentsComponent } from './home/containers/admin-view-appoinments/admin-view-appoinments.component';
import { SpecialistViewAppoinmentsComponent } from './home/containers/specialist-view-appoinments/specialist-view-appoinments.component';
import { AddPatientRecordComponent } from './home/containers/add-patient-record/add-patient-record.component';
import { ViewPatientRecordsComponent } from './home/containers/view-patient-records/view-patient-records.component';
import { PatviewPatientRecordsComponent } from './home/containers/patview-patient-records/patview-patient-records.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/login' },
  { 
    path: 'login', 
    component: LoginComponent, 
    canActivate: [AuthGuard] 
  },
  {
    path: 'adminHome',
    component: AdminDashboardComponent,
    canActivate: [AdminDashboardGuard],
    canLoad: [AdminDashboardGuard], children:[
      { path: 'bookAppoinment', component: BookAppoinmentsComponent, canActivate: [AdminDashboardGuard], canLoad: [AdminDashboardGuard]},
      { path: 'appoinmentReview', component: AdminAppoinmentsReviewComponent, canActivate: [AdminDashboardGuard], canLoad: [AdminDashboardGuard]},
      { path: 'viewAppoinments', component: AdminViewAppoinmentsComponent, canActivate: [AdminDashboardGuard], canLoad:[AdminDashboardGuard] },
      { path: 'addPatientRecord', component: AddPatientRecordComponent, canActivate:[AdminDashboardGuard], canLoad: [AdminDashboardGuard]},
      { path: 'viewPatientRecords', component: ViewPatientRecordsComponent, canActivate: [AdminDashboardGuard], canLoad:[AdminDashboardGuard]}
    ]
  },
  {
    path: 'doctorHome',
    component: DoctorDashboardComponent,
    canActivate: [DoctorDashboardGuard],
    canLoad: [DoctorDashboardGuard], children:[
      { path: 'bookAppoinment', component: BookAppoinmentsComponent, canActivate: [DoctorDashboardGuard], canLoad: [DoctorDashboardGuard]},
      { path: 'addPatientRecord', component: AddPatientRecordComponent, canActivate:[DoctorDashboardGuard], canLoad: [DoctorDashboardGuard]},
      { path: 'viewPatientRecords', component: ViewPatientRecordsComponent, canActivate: [DoctorDashboardGuard], canLoad:[DoctorDashboardGuard]}
    ]
  },
  {
    path: 'specialistHome',
    component: SpecialistDashboardComponent,
    canActivate: [SpecialistDashboardGuard],
    canLoad: [SpecialistDashboardGuard], children: [
      { path: 'specialistAppoinmentReview', component: SpecialistAppoinmentsReviewComponent, canActivate: [SpecialistDashboardGuard], canLoad: [SpecialistDashboardGuard]},
      { path: 'viewAppoinments', component: SpecialistViewAppoinmentsComponent, canActivate: [SpecialistDashboardGuard], canLoad:[SpecialistDashboardGuard] },
      { path: 'addPatientRecord', component: AddPatientRecordComponent, canActivate:[SpecialistDashboardGuard], canLoad: [SpecialistDashboardGuard]},
      { path: 'viewPatientRecords', component: ViewPatientRecordsComponent, canActivate: [SpecialistDashboardGuard], canLoad:[SpecialistDashboardGuard]}
    ]
  },
  {
    path: 'patientHome',
    component: PatientDashboardComponent,
    canActivate: [PatientDashboardGuard],
    canLoad: [PatientDashboardGuard], children: [
      { path: 'viewRecords', component: PatviewPatientRecordsComponent, canActivate: [PatientDashboardGuard], canLoad:[PatientDashboardGuard]}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
