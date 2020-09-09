// ./material/material.module.ts
// A module that wraps all the Mat* modules used/needed by this project

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatOptionModule, MatNativeDateModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatListModule } from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { MatSliderModule } from '@angular/material/slider';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [],
  imports: [
      CommonModule,
      MatButtonModule,
      MatToolbarModule,
      MatIconModule,
      MatCardModule,
      MatAutocompleteModule,
      MatFormFieldModule,
      MatOptionModule,
      MatCheckboxModule,
      MatListModule,
      MatRadioModule,
      MatDatepickerModule,
      MatNativeDateModule,
      MatInputModule,
      MatDividerModule,
      MatSliderModule,
      MatSelectModule,
      MatSlideToggleModule,
      MatMenuModule,
      MatTableModule,
      MatSortModule,
      MatPaginatorModule,
      MatTooltipModule
  ],
    exports: [
      CommonModule,
      MatButtonModule,
      MatToolbarModule,
      MatIconModule,
      MatCardModule,
      MatAutocompleteModule,
      MatFormFieldModule,
      MatOptionModule,
      MatCheckboxModule,
      MatListModule,
      MatRadioModule,
      MatDatepickerModule,
      MatNativeDateModule,
      MatInputModule,
      MatDividerModule,
      MatSliderModule,
      MatSelectModule,
      MatSlideToggleModule,
      MatMenuModule,
      MatTableModule,
      MatSortModule,
      MatPaginatorModule,
      MatTooltipModule
  ]
})
export class MaterialModule { }
