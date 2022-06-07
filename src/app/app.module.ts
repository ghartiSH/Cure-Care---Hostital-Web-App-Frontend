import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GoogleMapsModule } from '@angular/google-maps';



import {MatDividerModule} from '@angular/material/divider';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSelectModule} from '@angular/material/select';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './Client-pages/home/home.component';
import { HeaderComponent } from './Client-pages/header/header.component';
import { FooterComponent } from './Client-pages/footer/footer.component';
import { ServicesComponent } from './Client-pages/services/services.component';
import { AppointmentComponent } from './Client-pages/appointment/appointment.component';
import { AboutHospitalComponent } from './Client-pages/about-hospital/about-hospital.component';
import { DepartmentComponent } from './Client-pages/department/department.component';
import { DoctorsComponent } from './Client-pages/doctors/doctors.component';
import { NewsComponent } from './Client-pages/news/news.component';
import { CareerComponent } from './Client-pages/career/career.component';
import { ContactComponent } from './Client-pages/contact/contact.component';
import { LoginComponent } from './Client-pages/login/login.component';
import { StaffloginComponent } from './Client-pages/stafflogin/stafflogin.component';
import { ReceptionistloginComponent } from './Client-pages/receptionistlogin/receptionistlogin.component';
import { RegisterComponent } from './Client-pages/register/register.component';
import { DepartmentDetailsComponent } from './Client-pages/department-details/department-details.component';
import { DoctorProfileComponent } from './Client-pages/doctor-profile/doctor-profile.component';
import { NewsDetailsComponent } from './Client-pages/news-details/news-details.component';
import { AdminHeaderComponent } from './admin-pages/admin-header/admin-header.component';
import { DashboardComponent } from './admin-pages/dashboard/dashboard.component';
import { AdminAppointmentComponent } from './admin-pages/admin-appointment/admin-appointment.component';
import { AddDoctorComponent } from './admin-pages/add-doctor/add-doctor.component';
import { PatientsComponent } from './admin-pages/patients/patients.component';
import { AddPatientComponent } from './admin-pages/add-patient/add-patient.component';
import { AddDepartmentComponent } from './admin-pages/add-department/add-department.component';
import { PaymentComponent } from './admin-pages/payment/payment.component';
import { StaffPaymentComponent } from './admin-pages/staff-payment/staff-payment.component';
import { PatientPaymentDetailsComponent } from './admin-pages/patient-payment-details/patient-payment-details.component';
import { StaffPaymentDetailsComponent } from './admin-pages/staff-payment-details/staff-payment-details.component';
import { GridPatientComponent } from './admin-pages/grid-patient/grid-patient.component';
import { ViewReportComponent } from './patient-pages/view-report/view-report.component';
import { PateintHeaderComponent } from './patient-pages/pateint-header/pateint-header.component';
import { StaffHeaderComponent } from './staff-pages/staff-header/staff-header.component';
import { PatientReportComponent } from './staff-pages/patient-report/patient-report.component';
import { UploadReportComponent } from './staff-pages/upload-report/upload-report.component';
import { FinancialLoginComponent } from './financial-pages/financial-login/financial-login.component';
import { FAdminLoginComponent } from './financial-pages/f-admin-login/f-admin-login.component';
import { OnlineBillComponent } from './Billing-pages/online-bill/online-bill.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ServicesComponent,
    AppointmentComponent,
    AboutHospitalComponent,
    DepartmentComponent,
    DoctorsComponent,
    NewsComponent,
    CareerComponent,
    ContactComponent,
    LoginComponent,
    StaffloginComponent,
    ReceptionistloginComponent,
    RegisterComponent,
    DepartmentDetailsComponent,
    DoctorProfileComponent,
    NewsDetailsComponent,
    AdminHeaderComponent,
    DashboardComponent,
    AdminAppointmentComponent,
    AddDoctorComponent,
    PatientsComponent,
    AddPatientComponent,
    AddDepartmentComponent,
    PaymentComponent,
    StaffPaymentComponent,
    PatientPaymentDetailsComponent,
    StaffPaymentDetailsComponent,
    GridPatientComponent,
    ViewReportComponent,
    PateintHeaderComponent,
    StaffHeaderComponent,
    PatientReportComponent,
    UploadReportComponent,
    FinancialLoginComponent,
    FAdminLoginComponent,
    OnlineBillComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    GoogleMapsModule,
    MatDividerModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatProgressBarModule,
    MatTableModule,
    MatPaginatorModule,
    MatSlideToggleModule,
    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatGridListModule,
    MatSelectModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
