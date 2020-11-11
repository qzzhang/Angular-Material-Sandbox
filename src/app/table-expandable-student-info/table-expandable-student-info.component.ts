import { Component, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { STUDENTS_DATA } from './students-data';
import { animate, state, style, transition, trigger } from '@angular/animations';

/** Add Animation Trigger
 * The 'transition()' with '<=>' make sure to apply the 'animate()' transition effect
 * when the state changes from 'expanded' to 'collapsed' or vice-versa.
 */

@Component({
  selector: 'app-table-expandable-student-info',
  templateUrl: './table-expandable-student-info.component.html',
  styleUrls: ['./table-expandable-student-info.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)'))
    ])
  ]
})
export class TableExpandableStudentInfoComponent implements OnInit {

  constructor() { }

  isTableExpanded = false;

  dataStudentsList = new MatTableDataSource();
  displayedStudentsColumnsList: string[] = ['id', 'name', 'age', 'address', 'actions'];

  // Toggle Rows
  toggleTableRows(): void {
    this.isTableExpanded = !this.isTableExpanded;

    this.dataStudentsList.data.forEach((row: any) => {
      row.isExpanded = this.isTableExpanded;
    });
  }

  ngOnInit(): void {
    this.dataStudentsList.data = STUDENTS_DATA;
  }

}
