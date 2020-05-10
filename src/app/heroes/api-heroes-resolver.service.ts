import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { Hero } from '../hero';

@Injectable()
export class ApiHeroesResolverService implements Resolve<Hero[]> {
  constructor(private httpClient: HttpClient) {}

  resolve() {
    return this.httpClient.get<Hero[]>('/api/heroes');
  }
}
