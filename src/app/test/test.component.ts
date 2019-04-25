import { Component, OnInit, HostListener } from '@angular/core';
import { FirstTimeVisitorComponent } from '../first-time-visitor/first-time-visitor.component';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  title = 'testApp';
  color = 'yellow';
  welcome = FirstTimeVisitorComponent;

  constructor() {}
  @HostListener('click', ['$event'])
  onHostClick(event: Event) {
    console.log(event);
  }
  ngOnInit() {}
  compute(number: number): number {
    if (number < 0) {
      return 0;
    }
    return number + 1;
  }
}
