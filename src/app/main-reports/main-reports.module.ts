import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainReportsRoutingModule } from './main-reports.routing';
import { SalesReportsComponent } from './reports/sales-reports/sales-reports.component';


@NgModule( {
  declarations: [
    SalesReportsComponent
  ],
  imports: [
    CommonModule,
    MainReportsRoutingModule
  ]
} )
export class MainReportsModule { }
