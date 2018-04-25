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

    <!-- ngSwitch -->
    <div [ngSwitch]="color">
      <div *ngSwitchCase="'red'">You picked the red color</div>
      <div *ngSwitchCase="'blue'">You picked the blue color</div>
      <div *ngSwitchCase="'green'">You picked the green color</div>
      <div *ngSwitchDefault>Pick again</div>
    </div>
  `,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public displayName = true;
  public color = "blue";
  constructor() { }

  ngOnInit() {
  }

}
