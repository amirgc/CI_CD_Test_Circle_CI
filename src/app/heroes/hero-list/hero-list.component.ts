import { Component, OnInit } from '@angular/core';
import { HeroService } from 'src/app/heroes/hero.service';
import { Hero } from 'src/app/heroes/hero';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss']
})
export class HeroListComponent implements OnInit {

  // selectedHero: Hero;

  // heroes: Hero[];
  heroes$: Observable<Hero[]>;
  selectedId: number;
   constructor(
    private service: HeroService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.heroes$ = this.route.paramMap.pipe(
      switchMap(params => {
        // (+) before `params.get()` turns the string into a number
        this.selectedId = +params.get('id');
        return this.service.getHeroes();
      })
    );
  }

  // onSelect(hero: Hero): void {
  //   this.selectedHero = hero;
  // }

  // getHeroes(): void {
  //   this.heroService.getHeroes()
  //       .subscribe(heroes => this.heroes = heroes);
  // }

}
