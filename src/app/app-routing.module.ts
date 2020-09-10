import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ToolbarsComponent } from './toolbars/toolbars.component';
import { NavComponent } from './nav/nav.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { TableExpandableRowsComponent } from './table-expandable-rows/table-expandable-rows.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'toolbar', component: ToolbarsComponent},
  {path: 'nav', component: NavComponent},
  {path: 'buttons', component: ButtonsComponent},
  {path: 'datepicker', component: DatepickerComponent},
  {path: 'table-expandable', component: TableExpandableRowsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
