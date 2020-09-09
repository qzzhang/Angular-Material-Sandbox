import {animate, state, style, transition, trigger} from '@angular/animations';
import { PeriodicElement } from './periodic_element';
import { ELEMENT_DATA } from './element_data';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

/**
 * @title Table with expandable rows
 */
@Component({
  selector: 'app-table-expandable-rows',
  styleUrls: ['table-expandable-rows.component.css'],
  templateUrl: 'table-expandable-rows.component.html',
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class TableExpandableRowsComponent implements AfterViewInit {

  dataSource: any; // PeriodicElement[];
  columnsToDisplay: string[];
  expandedElement: PeriodicElement | null;

  constructor() {
      this.columnsToDisplay = ['position', 'name', 'weight', 'symbol'];
      this.dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
