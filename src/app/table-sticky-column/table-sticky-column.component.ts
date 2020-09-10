import { Component } from '@angular/core';
import { ELEMENT_DATA } from '../data/element_data';

/**
 * @title Table with sticky columns
 */
@Component({
  selector: 'app-table-sticky-column',
  styleUrls: ['table-sticky-column.component.css'],
  templateUrl: './table-sticky-column.component.html',
})
export class TableStickyColumnComponent {
  displayedColumns =
      ['name', 'position', 'weight', 'symbol', 'position', 'weight', 'symbol', 'star'];
  dataSource = ELEMENT_DATA;
}

