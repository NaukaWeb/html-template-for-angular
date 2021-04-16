import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPagesRoutingModule } from './main-pages.routing';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { CompanyComponent } from './pages/company/company.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FurnitureComponent } from './pages/furniture/furniture.component';
import { HomeContactusComponent } from './pages/home/home-contactus/home-contactus.component';
import { HomeAboutusComponent } from './pages/home/home-aboutus/home-aboutus.component';
import { MenuHeaderComponent } from './helpers/menu-header/menu-header.component';


@NgModule( {
  declarations: [
    HomeComponent,
    AboutComponent,
    CompanyComponent,
    ContactComponent,
    FurnitureComponent,
    HomeContactusComponent,
    HomeAboutusComponent,
    MenuHeaderComponent
  ],
  imports: [
    CommonModule,
    MainPagesRoutingModule
  ]
} )
export class MainPagesModule { }
