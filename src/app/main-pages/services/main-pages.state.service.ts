import { Injectable } from '@angular/core';

// Vendor
import { Observable, BehaviorSubject } from 'rxjs';


export class MainPagesStateModel {
  name: string;
  age: number;
}


@Injectable(
  {
    providedIn: 'root'
  }
)
export class MainPagesStateService {


  private subject = new BehaviorSubject<MainPagesStateModel>(
    new MainPagesStateModel()
  );
  state = this.subject.asObservable();

  stateObjectChange ( record: MainPagesStateModel ) {
    this.subject.next( record );
  }

}
