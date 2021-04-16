import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeContactusComponent } from './home-contactus.component';

describe('HomeContactusComponent', () => {
  let component: HomeContactusComponent;
  let fixture: ComponentFixture<HomeContactusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeContactusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeContactusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
