import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { MenuData } from './menudata';

@Component({
  selector: 'app-angular-material-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

    activeUser: User;
    menuItems: MenuData;

    constructor() {

      this.activeUser = new User();
      this.activeUser.Name = '@angular_js';
      this.activeUser.IsActive = true;
      this.menuItems = new MenuData();
      this.menuItems.Users = [];

      this.menuItems.Users.push({Name: '@qzhang', IsActive: false});
      this.menuItems.Users.push(this.activeUser);

      this.menuItems.ActiveUser = this.activeUser;

      this.menuItems.OtherMenus = [];
      this.menuItems.OtherMenus.push('Add an existing account');
      this.menuItems.OtherMenus.push('Manage accounts');

    }

    ngOnInit(): void {
    }
  }
