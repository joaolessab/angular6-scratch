import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  //Template Inline
  template: `
    <h2>Welcome {{name}}</h2>
    <h2>{{2+2}}</h2>
    <h2>{{"Welcome "+ name}}</h2>
    <h2>{{name.length}}</h2>
    <h2>{{name.toUpperCase()}}</h2>
    <h2>{{greetUser()}}</h2>
    <h2>{{siteUrl}}</h2>

    <!-- Property Bindings -->
    <input [id]="myId" type="text" value="Ronaldo">
    <input [disabled]="false" [id]="myId" type="text" value="Ronaldo">
    <input [disabled]="isDisabled" [id]="myId" type="text" value="Ronaldo">
    <input bind-disabled="isDisabled" [id]="myId" type="text" value="Ronaldo">
  `,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public name = "João";
  public siteUrl = window.location.href;

  public myId = "testeId";
  public isDisabled = true;

  constructor() { }

  ngOnInit() {
  }

  greetUser(){
    return "Hello " + this.name;
  }

}
