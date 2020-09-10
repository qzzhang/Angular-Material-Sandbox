import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { PeriodicElement, ELEMENT_DATA } from '../data/element_data';
import { SelectionModel } from '@angular/cdk/collections';

/**
 * @title Data table with sorting, pagination, and filtering.
 */
@Component({
  selector: 'app-angular-material-tables',
  templateUrl: './tables0.component.html',
  styleUrls: ['./tables.component.css']
})

export class TablesComponent implements AfterViewInit {

  dataSource: any; // PeriodicElement[];
  displayedColumns: string[];
  selection: any;

  constructor() {
      this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
      this.dataSource = ELEMENT_DATA;
      this.dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
      this.selection = new SelectionModel<PeriodicElement>(true, []);
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

