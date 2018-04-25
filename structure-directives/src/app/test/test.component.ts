import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <!-- ngIf example -->
    <div *ngIf="displayName; then thenBlock; else elseBlock"></div>

    <ng-template #thenBlock>
      <h2>Codevolution</h2>
    </ng-template>

    <ng-template #elseBlock>
      <h2>Name is hidden</h2>
    </ng-template>
  `,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public displayName = true;
  constructor() { }

  ngOnInit() {
  }

}
