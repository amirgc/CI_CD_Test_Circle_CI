import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroDetailComponent } from './hero-detail.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute, RouterModule } from '@angular/router';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';


describe('HeroDetailComponent', () => {
  let component: HeroDetailComponent;
  let fixture: ComponentFixture<HeroDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterModule.forRoot([])],
      declarations: [HeroDetailComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  // beforeEach(async(() => {
  //   TestBed.configureTestingModule({
  //     declarations: [HeroDetailComponent],
  //     imports: [
  //       RouterModule.forChild([ { path: 'hero/:id', component: HeroDetailComponent }])
  //     ],
  //     providers: [ActivatedRoute]
  //   }).compileComponents();
  // }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
