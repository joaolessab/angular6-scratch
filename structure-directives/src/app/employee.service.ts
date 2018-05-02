import { Injectable } from '@angular/core';

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
