import { Component, OnInit } from '@angular/core';

export interface Feedback {
  name: string;
  address: string
  age: string;
  date: string;
  treatment: string;
}

const ELEMENT_DATA: Feedback[] = [
  
  {name:'Salina Shrestha', address:'Lalitpur', age:'24', date:"2020-10-10",  treatment:"Cardiology"},
  {name:'Salina Shrestha', address:'Lalitpur', age:'24', date:"2020-10-10",  treatment:"Cardiology"},
  {name:'Salina Shrestha', address:'Lalitpur', age:'24', date:"2020-10-10",  treatment:"Cardiology"},
  {name:'Salina Shrestha', address:'Lalitpur', age:'24', date:"2020-10-10",  treatment:"Cardiology"},
  {name:'Salina Shrestha', address:'Lalitpur', age:'24', date:"2020-10-10",  treatment:"Cardiology"},
  {name:'Salina Shrestha', address:'Lalitpur', age:'24', date:"2020-10-10",  treatment:"Cardiology"},
  {name:'Salina Shrestha', address:'Lalitpur', age:'24', date:"2020-10-10",  treatment:"Cardiology"},
  {name:'Salina Shrestha', address:'Lalitpur', age:'24', date:"2020-10-10",  treatment:"Cardiology"},
  {name:'Salina Shrestha', address:'Lalitpur', age:'24', date:"2020-10-10",  treatment:"Cardiology"},
  {name:'Salina Shrestha', address:'Lalitpur', age:'24', date:"2020-10-10",  treatment:"Cardiology"},
  {name:'Salina Shrestha', address:'Lalitpur', age:'24', date:"2020-10-10",  treatment:"Cardiology"},
  {name:'Salina Shrestha', address:'Lalitpur', age:'24', date:"2020-10-10",  treatment:"Cardiology"},
  {name:'Salina Shrestha', address:'Lalitpur', age:'24', date:"2020-10-10",  treatment:"Cardiology"},
  {name:'Salina Shrestha', address:'Lalitpur', age:'24', date:"2020-10-10",  treatment:"Cardiology"},
  {name:'Salina Shrestha', address:'Lalitpur', age:'24', date:"2020-10-10",  treatment:"Cardiology"},
  {name:'Salina Shrestha', address:'Lalitpur', age:'24', date:"2020-10-10",  treatment:"Cardiology"},

  
  
];

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  displayedColumns: string[] = ['name', 'address','age', 'date','treatment'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
