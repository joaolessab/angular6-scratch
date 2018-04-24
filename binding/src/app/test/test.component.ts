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

    <!-- Style Bindings -->
    <h2 [style.color]="'orange'">Style Bindings</h2>
    <h2 [style.color]="hasError ? 'red' : 'green'">Style Bindings</h2>
    <h2 [style.color]="highLightColor">Style Bindings</h2>
    <h2 [ngStyle]="titleStyles">Style Bindings</h2>

    <!-- Event Bindings -->
    <button (click)="onClick()">Greet</button>
    <button (click)="onClickEvent($event)">Greet</button>  
    <button (click)="greeting='Welcome João'">Greet</button> 
    {{greeting}} 
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

  public highLightColor = "purple";
  public titleStyles = {
    color: "blue",
    fontStyle: "italic"
  };

  public greeting = "";

  constructor() { }

  ngOnInit() {
  }

  onClick(){
    alert('Welcome to Codevolution');
    this.greeting = "Welcome to Codevolution";
  }

  onClickEvent(event){
    alert(event);
    this.greeting = event.type;
  }

  greetUser(){
    return "Hello " + this.name;
  }

}
