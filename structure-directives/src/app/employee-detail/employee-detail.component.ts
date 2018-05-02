import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-detail',
  template: `
    <!--
      - We don't need to duplicate the same information to show in different views;
      - We can create a service to use it as a source;
      - We violate the principles of repeating ourselves;
      - We violate the Single Responsibility Principle;
      - The solution is a Service (that is a class with a specific purpose); 
    -->

    <h2>Employee List</h2>
    <ul *ngFor="let employee of employees">
      <li>{{employee.id}}. {{employee.name}} - {{employee.age}}</li>
    </ul>
  `,
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  constructor() { }

  public employees = [
    {"id": 1, "name": "Andrew", "age": 30},
    {"id": 2, "name": "Sophia", "age": 31},
    {"id": 3, "name": "Cris", "age": 32},
    {"id": 4, "name": "David", "age": 14},
  ];

  ngOnInit() {
  }

}
