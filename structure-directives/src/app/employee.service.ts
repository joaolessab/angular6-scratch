import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEmployee } from './employee';
import { Observable } from 'rxjs/Observable';


//Injectable is used to inject services in services
//If we remove this, it will become a regular typescript class, nothing to do with Angular
@Injectable()
export class EmployeeService {

  private _url: string = "/assets/data/employees.json";
  //When we have an webserver, just replace the URL string for the webserver url

  constructor(private http: HttpClient) { }

  //We are expecting an array of Employee Interfaces that was created
  getEmployees(): Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this._url);
  }

  /*getEmployees(){
    return [
      {"id": 1, "name": "Andrew", "age": 30},
      {"id": 2, "name": "Sophia", "age": 31},
      {"id": 3, "name": "Cris", "age": 32},
      {"id": 4, "name": "David", "age": 14}
    ];
  }*/
}