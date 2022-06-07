import { Component, OnInit,} from '@angular/core';
import { Chart } from 'chart.js';

export interface Feedback {
  name: string;
  address: string
  email: string;
  message: string;
}

const ELEMENT_DATA: Feedback[] = [
  
  {name:'Salina Shrestha', address:'Lalitpur', email:'asdf@email.com', message:'asdfasdf'},
  {name:'Salina Shrestha', address:'Lalitpur', email:'asdf@email.com', message:'asdfasdf'},
  {name:'Salina Shrestha', address:'Lalitpur', email:'asdf@email.com', message:'asdfasdf'},
  {name:'', address:'', email:'', message:''},
  {name:'', address:'', email:'', message:''},
  {name:'', address:'', email:'', message:''},
  {name:'', address:'', email:'', message:''},
];


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  constructor() { }

  displayedColumns: string[] = ['name', 'address', 'email', 'message'];
  dataSource = ELEMENT_DATA;

  ngOnInit(): void {
    const myChart = new Chart('myChart', {
      type: 'bar',
      data: {
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [{
              label: '# of Votes',
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
  });
  }

}
