import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { CompanyComponent } from './pages/company/company.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FurnitureComponent } from './pages/furniture/furniture.component';

import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [

  { path: "", redirectTo: 'home', pathMatch: "full" },

  { path: "home", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "company", component: CompanyComponent },
  { path: "contact", component: ContactComponent },
  { path: "furniture", component: FurnitureComponent },

];

@NgModule( {
  imports: [RouterModule.forChild( routes )],
  exports: [RouterModule]
} )
export class MainPagesRoutingModule { }
