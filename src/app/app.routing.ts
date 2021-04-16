import { FurnitureComponent } from './main-pages/pages/furniture/furniture.component';
import { CompanyComponent } from './main-pages/pages/company/company.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AboutComponent } from './main-pages/pages/about/about.component';

import { HomeComponent } from './main-pages/pages/home/home.component';
import { ContactComponent } from './main-pages/pages/contact/contact.component';

const routes: Routes = [

  { path: "", redirectTo: '', pathMatch: "full" },

  {
    path: "", component: AppComponent, children: [
      {
        path: 'main-pages',
        loadChildren: () =>
          import( './main-pages/main-pages.module' ).then( ( m ) => m.MainPagesModule ),
      },
    ]
  },

  { path: "home", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "company", component: CompanyComponent },
  { path: "contact", component: ContactComponent },
  { path: "furniture", component: FurnitureComponent },

];

@NgModule( {
  imports: [RouterModule.forRoot( routes )],
  exports: [RouterModule]
} )
export class AppRoutingModule { }
