import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HighlightDirective } from './highlight.directive';
import { TestComponent } from './test/test.component';
import { TestPipe } from './test.pipe';
import { FirstTimeVisitorComponent } from './first-time-visitor/first-time-visitor.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeroesModule } from './heroes/heroes.module';
import { CrisisCenterModule } from './crisis-center/crisis-center.module';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    TestComponent,
    TestPipe,
    FirstTimeVisitorComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HeroesModule,
    CrisisCenterModule,
    AppRoutingModule
  ],
  providers: [],
  entryComponents: [FirstTimeVisitorComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
