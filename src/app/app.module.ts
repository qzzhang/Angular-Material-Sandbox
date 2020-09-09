// Modules automatically imported by the cli command 'ng new msd-project'
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Module imports as the development needs grow
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Components exported within this project
import { CheckboxComponent } from './checkbox/checkbox.component';
import { NavComponent } from './nav/nav.component';
import { MenuComponent } from './menu/menu.component';
import { DatepickerComponent } from './datepicker/datepicker.component';

// Module that wraps all the Mat* modules used/needed by this project
import { MaterialModule } from './material/material.module';
import { ButtonsComponent } from './buttons/buttons.component';
import { ToolbarsComponent } from './toolbars/toolbars.component';
import { TablesComponent } from './tables/tables.component';

@NgModule({
  declarations: [
    AppComponent,
    CheckboxComponent,
    NavComponent,
    MenuComponent,
    DatepickerComponent,
    ButtonsComponent,
    ToolbarsComponent,
    TablesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  exports: [AppComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
