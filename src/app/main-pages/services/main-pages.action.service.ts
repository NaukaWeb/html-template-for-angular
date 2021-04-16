import { Injectable } from '@angular/core';

// Vendor
import { Observable, BehaviorSubject } from 'rxjs';

import { MainPagesStateModel, MainPagesStateService } from './main-pages.state.service';


@Injectable(
  {
    providedIn: 'root'
  }
)
export class MainPagesActionService {

  stateTemp: MainPagesStateModel;

  constructor(
    private stateService: MainPagesStateService
  ) {

    this.stateService.state.subscribe( data => {
      this.stateTemp = data;
    } );

  }


  readName (): void {
    let result: string = "";
    let temp = localStorage.getItem( 'name' );
    this.stateTemp.name = temp ? temp : "";
  }

}
