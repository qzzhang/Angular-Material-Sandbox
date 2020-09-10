import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ToolbarsComponent } from './toolbars/toolbars.component';
import { NavComponent } from './nav/nav.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { TablesComponent } from './tables/tables.component';
import { TableSelectionComponent } from './table-selection/table-selection.component';
import { TableStickyColumnComponent } from './table-sticky-column/table-sticky-column.component';
import { TableExpandableRowsComponent } from './table-expandable-rows/table-expandable-rows.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'toolbar', component: ToolbarsComponent},
  {path: 'nav', component: NavComponent},
  {path: 'buttons', component: ButtonsComponent},
  {path: 'datepicker', component: DatepickerComponent},
  {path: 'tables', component: TablesComponent},
  {path: 'table_selection', component: TableSelectionComponent},
  {path: 'table_sticky_column', component: TableStickyColumnComponent},
  {path: 'table-expandable', component: TableExpandableRowsComponent}
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
