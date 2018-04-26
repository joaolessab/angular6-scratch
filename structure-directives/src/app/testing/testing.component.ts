import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-testing',
  template: `
    <h2>{{"Hello " + parentData}}</h2>
    <!--h2>{{"Hello " + name}}</h2-->

    <!-- Sending Data -->
    <button (click)="fireEvent()">Send Data</button>
  `,
  styleUrls: ['./testing.component.css']
})
export class TestingComponent implements OnInit {

  //Getting data from Parent Component
  @Input() public parentData;
  //@Input('parentData') public name;

  //Sending to Parent Component
  @Output() public childEvent = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }

  //Event created to emit
  fireEvent(){
    this.childEvent.emit("Hey Codevolution");  
  }

}
