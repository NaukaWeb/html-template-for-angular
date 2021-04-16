import { Component, OnInit } from '@angular/core';

import { MainPagesStateModel, MainPagesStateService } from '../../services/main-pages.state.service';
import { MainPagesActionService } from './../../services/main-pages.action.service';

@Component( {
  selector: 'app-furniture',
  templateUrl: './furniture.component.html',
  styleUrls: ['./furniture.component.scss']
} )
export class FurnitureComponent implements OnInit {

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
