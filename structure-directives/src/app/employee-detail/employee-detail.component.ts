import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-detail',
  template: `
    <h2>Employee Detail</h2>
    <h3>{{errorMsg}}</h3>
    <ul *ngFor="let employee of employees">
      <li>{{employee.id}}. {{employee.name}} - {{employee.age}}</li>
    </ul>
  `,
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  public employees = [];
  public errorMsg;

  constructor(private _employeeService: EmployeeService) { }

  // This event is called Lifecycle Hooks
  //Called once the component is initialized
  ngOnInit() {
    this._employeeService.getEmployees()
      .subscribe(data => this.employees = data,
                error => this.errorMsg = error);
    //The method returns observables, so we need to subscribe to read the data
  }
}