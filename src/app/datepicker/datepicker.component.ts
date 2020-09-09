import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-material-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css']
})
export class DatepickerComponent implements OnInit {

  constructor() { }
  startDate = new Date(2020, 10, 3);
  minDate = new Date(1990, 0, 1);
  maxDate = new Date(2080, 0,1);

  ngOnInit(): void {
  }
}
