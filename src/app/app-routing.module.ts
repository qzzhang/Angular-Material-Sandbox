import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ToolbarsComponent } from './toolbars/toolbars.component';
import { NavComponent } from './nav/nav.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { TablesComponent } from './tables/tables.component';
import { NestedMenuComponent } from './nested-menu/nested-menu.component';
import { TableSelectionComponent } from './table-selection/table-selection.component';
import { TableStickyHeaderComponent } from './table-sticky-header/table-sticky-header.component';
import { TableStickyFooterComponent } from './table-sticky-footer/table-sticky-footer.component';
import { TableStickyColumnComponent } from './table-sticky-column/table-sticky-column.component';
import { TableExpandableRowsComponent } from './table-expandable-rows/table-expandable-rows.component';
import { TableExpandableNestedComponent } from './table-expandable-nested/table-expandable-nested.component';
import { TableExpandableStudentInfoComponent } from './table-expandable-student-info/table-expandable-student-info.component';

const routes: Routes = [
  {path: '', redirectTo: 'buttons', pathMatch: 'full'},
  {path: 'toolbar', component: ToolbarsComponent},
  {path: 'nav', component: NavComponent},
  {path: 'buttons', component: ButtonsComponent},
  {path: 'datepicker', component: DatepickerComponent},
  {path: 'tables', component: TablesComponent},
  {path: 'nested_menu', component: NestedMenuComponent},
  {path: 'table_selection', component: TableSelectionComponent},
  {path: 'table_sticky_header', component: TableStickyHeaderComponent},
  {path: 'table_sticky_footer', component: TableStickyFooterComponent},
  {path: 'table_sticky_column', component: TableStickyColumnComponent},
  {path: 'table_expandable', component: TableExpandableRowsComponent},
  {path: 'table_expandable_student_info', component: TableExpandableStudentInfoComponent},
  {path: 'table_expandable_nested', component: TableExpandableNestedComponent}
];

/* Children routes
export const AppRoutes: Routes = [
  { path: '**',
    loadChildren: './navigation/navigation.module#NavigationModule', pathMatch: 'full' }
];
*/
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
