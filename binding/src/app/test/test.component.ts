import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  //Template Inline
  template: `
    <h2>
      Welcome Wishas
    </h2>
  `,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
