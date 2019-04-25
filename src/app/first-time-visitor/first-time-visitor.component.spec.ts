import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstTimeVisitorComponent } from './first-time-visitor.component';

describe('FirstTimeVisitorComponent', () => {
  let component: FirstTimeVisitorComponent;
  let fixture: ComponentFixture<FirstTimeVisitorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstTimeVisitorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstTimeVisitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
