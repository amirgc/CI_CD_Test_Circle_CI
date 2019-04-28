import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent } from './test.component';
import { FirstTimeVisitorComponent } from '../first-time-visitor/first-time-visitor.component';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';

describe('TestComponent', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async(() => {
    // TestBed.configureTestingModule({
    //   declarations: [TestComponent, FirstTimeVisitorComponent]
    // }).compileComponents();

    TestBed.configureTestingModule({
      declarations:  [TestComponent, FirstTimeVisitorComponent],
    }).overrideModule(BrowserDynamicTestingModule, {
      set: {
        entryComponents: [ FirstTimeVisitorComponent ],
      }
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should create 0', () => {
    const result = component.compute(-1);
    expect(result).toBe(0);
  });
});
