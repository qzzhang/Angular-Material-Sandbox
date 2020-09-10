import { Component, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { MatMenuListItem } from './menu_items';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  menuListItems: MatMenuListItem[];
  selectedMenu: string;

  constructor(private router: Router) {
    this.menuListItems = [
        { menuLinkText: 'Settings',
          menuIcon: 'settings',
          routerLink: '/settings',
          isDisabled: false},
        { menuLinkText: 'AboutUs',
          menuIcon: 'people',
          routerLink: '/people',
          isDisabled: false},
        { menuLinkText: 'book',
          menuIcon: 'book',
          routerLink: 'datepicker',
          isDisabled: false},
        { menuLinkText: 'Help',
          menuIcon: 'help',
          routerLink: '/help',
          isDisabled: false},
        { menuLinkText: 'Contact',
          menuIcon: 'contact',
          routerLink: '/contact',
          isDisabled: true }
    ];
  }

  @ViewChild('triggerBtn') triggerBtn: MatMenuTrigger;
  openMatMenuProgrammatically(){
    this.triggerBtn.openMenu();
  }

  @ViewChild('clickHoverMenuTrigger') clickHoverMenuTrigger: MatMenuTrigger;
  openOnMouseOver(){
      this.clickHoverMenuTrigger.openMenu();
  }

  clickMenuItem(menuItem: MatMenuListItem){
    this.selectedMenu = menuItem.menuLinkText;
    this.router.navigate([menuItem.routerLink]);
  }

  ngOnInit(): void {
  }

}
