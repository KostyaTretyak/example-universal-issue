import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroesComponent } from './heroes.component';
import { ApiHeroesResolverService } from './api-heroes-resolver.service';

// Parent route: '/heroes'.
const routes: Routes = [
  {
    path: '',
    component: HeroesComponent,
    resolve: {
      heroes: ApiHeroesResolverService,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [ApiHeroesResolverService],
})
export class IndexRoutingModule {}
