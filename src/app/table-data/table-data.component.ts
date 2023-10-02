import { Component } from '@angular/core';

@Component({
  selector: 'app-table-data',
  templateUrl: './table-data.component.html',
  styleUrls: ['./table-data.component.scss'],
})
export class TableDataComponent {
  data = [
    { name: 'virat' },
    { name: 'rohit' },
    { name: 'virat' },
    { name: 'jadeja' },
    { name: 'virat' },
    { name: 'rohit' },
    { name: 'kishan' },
    { name: 'kishan' },
    { name: 'kishan' },
    { name: 'kishan' },
  ];
}
