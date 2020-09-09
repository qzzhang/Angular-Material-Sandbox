import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-material-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent implements OnInit {
  IsChecked: boolean;
  IsIndeterminate: boolean;
  LabelAlign: string;
  IsDisabled: boolean;
  cities: any[];

  constructor() {
    this.IsChecked = false;
    this.IsIndeterminate = false;
    this.LabelAlign = 'after';
    this.IsDisabled = false;
    this.cities = [
      {id: 1, name: 'Chicago'},
      {id: 2, name: 'Tulum'},
      {id: 3, name: 'Playa Del Carmen'},
      {id: 4, name: 'Akumal'}
    ];
  }

  OnChange($event: any): void {
    console.log($event);
    $event.source.focus();
    // MatCheckboxChange {checked,MatCheckbox}
  }

  OnIndeterminateChange($event): void {
     console.log($event);
     // true or false
  }

  ngOnInit(): void {

  }
}
