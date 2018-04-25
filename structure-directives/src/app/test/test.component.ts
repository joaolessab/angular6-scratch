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

    <!-- ngFor -->
    <h2>Normal</h2>
    <div *ngFor="let uniqueColor of colors; index as i">
      <p [ngStyle]="{'color': uniqueColor}">{{i}} - {{color}}</p>
    </div>

    <h2>First</h2>
    <div *ngFor="let uniqueColor of colors; first as f">
      <p>{{f}} - {{uniqueColor}}</p>
    </div>

    <h2>Last</h2>
    <div *ngFor="let uniqueColor of colors; last as l">
      <p>{{l}} - {{uniqueColor}}</p>
    </div>

    <h2>Odd - ímpar</h2>
    <div *ngFor="let uniqueColor of colors; odd as o">
      <p>{{o}} - {{uniqueColor}}</p>
    </div>

    <h2>Odd - par</h2>
    <div *ngFor="let uniqueColor of colors; even as e">
      <p>{{e}} - {{uniqueColor}}</p>
    </div>
  `,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public displayName = true;
  public color = "blue";
  public colors = ["red", "blue", "green", "yellow", "purple"];
  constructor() { }

  ngOnInit() {
  }

}
