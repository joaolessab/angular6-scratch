import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  template: `
    <h2>Employee List</h2>
    <ul *ngFor="let employee of employees">
      <li>{{employee.name}}</li>
    </ul>
  `,
  styleUrls: ['./employee-list.component.css']
})

export class EmployeeListComponent implements OnInit {

  public employees = [
    {"id": 1, "name": "Andrew", "age": 30},
    {"id": 2, "name": "Sophia", "age": 31},
    {"id": 3, "name": "Cris", "age": 32},
    {"id": 4, "name": "David", "age": 14},
  ];

  constructor() { }

  ngOnInit() {
  }

}