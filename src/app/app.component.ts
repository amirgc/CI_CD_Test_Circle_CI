import { Component, OnInit } from '@angular/core';
import { slideInAnimation } from './animations';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  animations: [ slideInAnimation ]
})
export class AppComponent implements OnInit {
  getAnimationData(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
  ngOnInit() {
    // if (!this.user.isfirstVisit) {
    //   this.alert = FrequentVisitorComponent;
    // }
  }
}
