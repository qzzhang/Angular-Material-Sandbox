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
import { TableExpandableRowsComponent } from './table-expandable-rows/table-expandable-rows.component';
import { TableAddRemoveShuffleColumnsComponent } from './table-add-remove-shuffle-columns/table-add-remove-shuffle-columns.component';
import { TableSelectionComponent } from './table-selection/table-selection.component';
import { TableStickyColumnComponent } from './table-sticky-column/table-sticky-column.component';
import { TableStickyHeaderComponent } from './table-sticky-header/table-sticky-header.component';
import { TableStickyFooterComponent } from './table-sticky-footer/table-sticky-footer.component';
import { NestedMenuComponent } from './nested-menu/nested-menu.component';
import { TableExpandableStudentInfoComponent } from './table-expandable-student-info/table-expandable-student-info.component';

// Other imports
// import { NavigationModule } from './navigation/navigation.module';
// import { NavigationComponent } from './navigation/navigation.component';
// import { UltiMaterialModule } from './ulti-material/ulti-material.module';
// import { HttpClientModule } from '@angular/common/http';
// import { LayoutModule } from '@angular/cdk/layout';


@NgModule({
  declarations: [
    AppComponent,
    CheckboxComponent,
    NavComponent,
    MenuComponent,
    DatepickerComponent,
    ButtonsComponent,
    ToolbarsComponent,
    TablesComponent,
    TableExpandableRowsComponent,
    TableAddRemoveShuffleColumnsComponent,
    TableSelectionComponent,
    TableStickyColumnComponent,
    TableStickyHeaderComponent,
    TableStickyFooterComponent,
    NestedMenuComponent,
    TableExpandableStudentInfoComponent
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
