import { Component, OnInit } from '@angular/core';

import { MainPagesStateModel, MainPagesStateService } from '../../../services/main-pages.state.service';
import { MainPagesActionService } from '../../../services/main-pages.action.service';

@Component( {
  selector: 'app-home-contactus',
  templateUrl: './home-contactus.component.html',
  styleUrls: ['./home-contactus.component.scss']
} )
export class HomeContactusComponent implements OnInit {

  stateTemp: MainPagesStateModel;

  constructor(
    private stateService: MainPagesStateService,
    private actionService: MainPagesActionService
  ) {

    this.stateService.state.subscribe( data => {
      this.stateTemp = data;
    } );

  }

  ngOnInit (): void {
  }

  readName (): void {
    this.actionService.readName();
  }

}
