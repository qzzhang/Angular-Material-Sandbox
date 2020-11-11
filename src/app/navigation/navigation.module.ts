import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

/*
import { UltiMaterialModule } from '../ulti-material/ulti-material.module';
import { VendorsComponent } from '../vendors/vendors.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { UserPanelComponent } from '../user-panel/user-panel.component';
import { QuestionnaireComponent } from '../questionnaire/questionnaire.component';
*/
import { NavigationComponent } from './navigation.component';

import { NavigationRoutingModule } from './navigation-routing.module';


@NgModule({
  declarations: [
    //VendorsComponent,
    //DashboardComponent,
    //UserPanelComponent,
    //QuestionnaireComponent,
    NavigationComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    CommonModule,
    //UltiMaterialModule,
    NavigationRoutingModule
  ],
  exports: [
    NavigationComponent,
    RouterModule
  ]
})
export class NavigationModule {}
