import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import { UserService, expandableTableRowAnimation, User } from '../table-row/shared/index';


@Component({
  selector: 'app-table-expandable-nested',
  templateUrl: './table-expandable-nested.component.html',
  styleUrls: ['../table-row/shared/css/table.scss' ],
  animations: [ expandableTableRowAnimation ]
})
export class TableExpandableNestedComponent implements OnInit {

  users: User[];

  displayedColumns: string[] = [
    'expandIcon',
    'Identification number',
    'Name',
    'Gender',
    'Risk',
    'Hair length',
    'IQ',
    'Admission date',
    'Last breakdown',
    'Yearly fee',
    'Knows the Joker?',
    'deleteIcon'
  ];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService
      .getUsers()
      .subscribe(data => this.users = data);
  }

  deleteUser(index: number): void {
    this.users.splice(index, 1);
    this.users = [...this.users];
  }

}
