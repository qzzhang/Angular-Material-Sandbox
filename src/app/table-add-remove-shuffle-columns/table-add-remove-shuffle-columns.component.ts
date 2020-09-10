import { PeriodicElement } from './periodic_element';
import { ELEMENT_DATA } from './element_data';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-table-add-remove-shuffle-columns',
  templateUrl: './table-add-remove-shuffle-columns.component.html',
  styleUrls: ['./table-add-remove-shuffle-columns.component.css']
})
export class TableAddRemoveShuffleColumnsComponent implements AfterViewInit {

  dataSource: any; // PeriodicElement[];
  columnsToDisplay: string[];
  expandedElement: PeriodicElement | null;
  displayedColumns: string[];

  constructor() {
      this.dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
      this.displayedColumns = ['name', 'weight', 'symbol', 'position'];
      this.columnsToDisplay = this.displayedColumns.slice();
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

  addColumn(): void {
    const randomColumn = Math.floor(Math.random() * this.displayedColumns.length);
    this.columnsToDisplay.push(this.displayedColumns[randomColumn]);
  }

  removeColumn(): void {
    if (this.columnsToDisplay.length) {
      this.columnsToDisplay.pop();
    }
  }

  shuffle(): void {
    let currentIndex = this.columnsToDisplay.length;
    while (0 !== currentIndex) {
      const randomIndex: number = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // Swap
      const temp = this.columnsToDisplay[currentIndex];
      this.columnsToDisplay[currentIndex] = this.columnsToDisplay[randomIndex];
      this.columnsToDisplay[randomIndex] = temp;
    }
  }
}
