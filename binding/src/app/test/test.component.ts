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

    <!-- Class Bindings -->
    <h2 class="text-success">Codevolution</h2>
    <h2 [class]=successClass>Codevolution</h2>
    <h2 class="text-special" [class]=successClass>Codevolution</h2>
    <h2 [class.text-danger]=hasError>Codevolution</h2>
    <h2 [ngClass]="messageClasses">Codevolution</h2>
  `,
  //Style inline
  styles: [`
    .text-success{
      color: green;
    }
    .text-danger{
      color: red;
    }
    .text-special{
      font-style: italic;
    }
  `]
})
export class TestComponent implements OnInit {

  public name = "João";
  public siteUrl = window.location.href;

  public myId = "testeId";
  public isDisabled = true;

  public successClass = "text-success";
  public hasError = true;
  public isSpecial = true;
  public messageClasses = {
    "text-success": !this.hasError,
    "text-danger": !this.hasError,
    "text-special": this.isSpecial
  };

  constructor() { }

  ngOnInit() {
  }

  greetUser(){
    return "Hello " + this.name;
  }

}
