import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { VendorsComponent } from '../vendors/vendors.component';
//import { DashboardComponent } from '../dashboard/dashboard.component';

export const NavigationRoutes: Routes = [
  { path: 'home', redirectTo: 'dashboard', pathMatch: 'full' },
  //{ path: 'vendors', component: VendorsComponent },
  //{ path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forChild(NavigationRoutes) ],
  exports: [ RouterModule ]
})
export class NavigationRoutingModule {}
