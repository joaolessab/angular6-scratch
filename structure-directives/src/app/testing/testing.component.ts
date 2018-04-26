import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-testing',
  template: `
    <h2>{{"Hello " + parentData}}</h2>
    <!--h2>{{"Hello " + name}}</h2-->
  `,
  styleUrls: ['./testing.component.css']
})
export class TestingComponent implements OnInit {

  //Getting parentData
  @Input() public parentData;
  //@Input('parentData') public name;
  
  constructor() { }

  ngOnInit() {
  }

}
