import { Injectable } from '@angular/core';

//Injectable is used to inject services in services
//If we remove this, it will become a regular typescript class, nothing to do with Angular
@Injectable()
export class EmployeeService {

  constructor() { }

  getEmployees(){
    return [
      {"id": 1, "name": "Andrew", "age": 30},
      {"id": 2, "name": "Sophia", "age": 31},
      {"id": 3, "name": "Cris", "age": 32},
      {"id": 4, "name": "David", "age": 14}
    ];
  }

}