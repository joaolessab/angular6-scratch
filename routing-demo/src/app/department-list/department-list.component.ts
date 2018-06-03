import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-list',
  template: `
    <h3>Department List</h3>
    <ul class="items">
      <li (click)="onSelect(department)" *ngFor="let department of departments" class="route-btn" [class.selected]="isSelected(department)">
        <span class="badge">{{department.id}}</span> {{department.name}}
      </li>
    </ul>
  `,
  styles: ['.route-btn { background-color: #ffd7d7; border-radius: 3px; width: 90px; margin: 10px; padding: 10px}', 
          '.route-btn:hover { cursor: pointer; background-color: red; color: white }',
          '.selected { background-color: #CFD8DC; color: white }']
})
export class DepartmentListComponent implements OnInit {

  public selectedId;

  departments = [
    {'id': 1, 'name': 'Angular'},
    {'id': 2, 'name': 'Node'},
    {'id': 3, 'name': 'MongoDB'},
    {'id': 4, 'name': 'Ruby'},
    {'id': 5, 'name': 'Bootstrap'}
  ];

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.selectedId = id;
    });
  }

  onSelect(department) {
    this.router.navigate(['/departments', department.id]);
    //this.router.navigate([department.id], {relativeTo: this.route}); //This is appending to the url independent of what is the current url
  }

  isSelected(department){
    return department.id === this.selectedId;
  }
}
