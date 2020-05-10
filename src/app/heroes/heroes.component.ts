import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  template: `
  <p>heroes works!</p>
  <ul>
    <li *ngFor="let hero of heroes">{{ hero.name }}</li>
  </ul>`
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.heroes = this.activatedRoute.snapshot.data.heroes as Hero[];
  }
}
