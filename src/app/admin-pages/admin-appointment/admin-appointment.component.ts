import { Component, OnInit } from '@angular/core';

export interface Feedback {
  id:string;
  name: string;
  address: string
  email: string;
  phone: string;
  date: string;
  time: string;
  department:string;
  doctor:string;
  problem: string;
}

const ELEMENT_DATA: Feedback[] = [
  
  {id:'145', name:'Salina Shrestha', address:'Lalitpur', email:'asdf@email.com', phone:'9987545454', date:"2020-10-10", time:"11 am", department:"Cardiology", doctor:"Mr. Bharat", problem:'asdfasdf'},
  {id:'145', name:'Salina Shrestha', address:'Lalitpur', email:'asdf@email.com', phone:'9987545454', date:"2020-10-10", time:"11 am", department:"Cardiology", doctor:"Mr. Bharat", problem:'asdfasdf'},
  {id:'145', name:'Salina Shrestha', address:'Lalitpur', email:'asdf@email.com', phone:'9987545454', date:"2020-10-10", time:"11 am", department:"Cardiology", doctor:"Mr. Bharat", problem:'asdfasdf'},
  {id:'145', name:'Salina Shrestha', address:'Lalitpur', email:'asdf@email.com', phone:'9987545454', date:"2020-10-10", time:"11 am", department:"Cardiology", doctor:"Mr. Bharat", problem:'asdfasdf'},
  {id:'145', name:'Salina Shrestha', address:'Lalitpur', email:'asdf@email.com', phone:'9987545454', date:"2020-10-10", time:"11 am", department:"Cardiology", doctor:"Mr. Bharat", problem:'asdfasdf'},
  {id:'',name:'', address:'',email:'',phone:'',date:'',time:'',department:'',doctor:'',problem:''},
  {id:'',name:'', address:'',email:'',phone:'',date:'',time:'',department:'',doctor:'',problem:''},
  {id:'',name:'', address:'',email:'',phone:'',date:'',time:'',department:'',doctor:'',problem:''},
  {id:'',name:'', address:'',email:'',phone:'',date:'',time:'',department:'',doctor:'',problem:''},
  {id:'',name:'', address:'',email:'',phone:'',date:'',time:'',department:'',doctor:'',problem:''},
  {id:'',name:'', address:'',email:'',phone:'',date:'',time:'',department:'',doctor:'',problem:''},
  
];

@Component({
  selector: 'app-admin-appointment',
  templateUrl: './admin-appointment.component.html',
  styleUrls: ['./admin-appointment.component.scss']
})
export class AdminAppointmentComponent implements OnInit {
  displayedColumns: string[] = ['id','name', 'email', 'phone', 'address', 'date', 'time','department','doctor', 'problem'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
