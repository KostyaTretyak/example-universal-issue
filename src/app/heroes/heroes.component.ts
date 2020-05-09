import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.heroes = this.activatedRoute.snapshot.data.heroListRes as Hero[];
  }
}
