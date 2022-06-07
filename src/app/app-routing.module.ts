import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDepartmentComponent } from './admin-pages/add-department/add-department.component';
import { AddDoctorComponent } from './admin-pages/add-doctor/add-doctor.component';
import { AddPatientComponent } from './admin-pages/add-patient/add-patient.component';
import { AdminAppointmentComponent } from './admin-pages/admin-appointment/admin-appointment.component';
import { DashboardComponent } from './admin-pages/dashboard/dashboard.component';
import { GridPatientComponent } from './admin-pages/grid-patient/grid-patient.component';
import { PatientPaymentDetailsComponent } from './admin-pages/patient-payment-details/patient-payment-details.component';
import { PatientsComponent } from './admin-pages/patients/patients.component';
import { PaymentComponent } from './admin-pages/payment/payment.component';
import { StaffPaymentDetailsComponent } from './admin-pages/staff-payment-details/staff-payment-details.component';
import { StaffPaymentComponent } from './admin-pages/staff-payment/staff-payment.component';
import { AboutHospitalComponent } from './Client-pages/about-hospital/about-hospital.component';
import { AppointmentComponent } from './Client-pages/appointment/appointment.component';
import { CareerComponent } from './Client-pages/career/career.component';
import { ContactComponent } from './Client-pages/contact/contact.component';
import { DepartmentDetailsComponent } from './Client-pages/department-details/department-details.component';
import { DepartmentComponent } from './Client-pages/department/department.component';
import { DoctorProfileComponent } from './Client-pages/doctor-profile/doctor-profile.component';
import { DoctorsComponent } from './Client-pages/doctors/doctors.component';
import { HomeComponent } from './Client-pages/home/home.component';
import { LoginComponent } from './Client-pages/login/login.component';
import { NewsDetailsComponent } from './Client-pages/news-details/news-details.component';
import { NewsComponent } from './Client-pages/news/news.component';
import { ReceptionistloginComponent } from './Client-pages/receptionistlogin/receptionistlogin.component';
import { RegisterComponent } from './Client-pages/register/register.component';
import { ServicesComponent } from './Client-pages/services/services.component';
import { StaffloginComponent } from './Client-pages/stafflogin/stafflogin.component';
import { FAdminLoginComponent } from './financial-pages/f-admin-login/f-admin-login.component';
import { FinancialLoginComponent } from './financial-pages/financial-login/financial-login.component';
import { ViewReportComponent } from './patient-pages/view-report/view-report.component';
import { PatientReportComponent } from './staff-pages/patient-report/patient-report.component';
import { UploadReportComponent } from './staff-pages/upload-report/upload-report.component';

const routes: Routes = [
  {path:"", redirectTo:"home", pathMatch:"full"},
  {path:"home", component: HomeComponent},
  {path:"services", component:ServicesComponent},
  {path:"appointment", component:AppointmentComponent},
  {path:"about-hospital", component:AboutHospitalComponent},
  {path:"department", component:DepartmentComponent},
  {path:"doctor", component:DoctorsComponent},
  {path:"news", component:NewsComponent},
  {path:"career", component:CareerComponent},
  {path:"contact", component:ContactComponent},
  {path:"login", component:LoginComponent},
  {path:"staff-login", component:StaffloginComponent},
  {path:"receptionist", component:ReceptionistloginComponent},
  {path:"register", component:RegisterComponent},
  {path:"dep-details", component:DepartmentDetailsComponent},
  {path:"profile", component:DoctorProfileComponent},
  {path:"news-details", component:NewsDetailsComponent},

  {path:"dashboard", component:DashboardComponent},
  {path:"admin-appointment", component:AdminAppointmentComponent},
  {path:"add-doctor", component:AddDoctorComponent},
  {path:"patient", component:PatientsComponent},
  {path:"add-patient", component:AddPatientComponent},
  {path:"add-department", component:AddDepartmentComponent},
  {path:"payment", component:PaymentComponent},
  {path:"staff-payment", component:StaffPaymentComponent},
  {path:"p-p-details", component:PatientPaymentDetailsComponent},
  {path:"s-p-details", component:StaffPaymentDetailsComponent},
  {path:"grid-patient", component:GridPatientComponent},

  {path:"view-report", component:ViewReportComponent},

  {path:"patient-report", component:PatientReportComponent},
  {path:"upload-report", component:UploadReportComponent},

  {path:"financial", component:FinancialLoginComponent},
  {path:"f-admin", component:FAdminLoginComponent},

  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
