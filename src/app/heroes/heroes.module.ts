import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesComponent } from './heroes.component';
import { IndexRoutingModule } from './index-routing.module';

@NgModule({
  declarations: [HeroesComponent],
  imports: [
    CommonModule,
    IndexRoutingModule
  ]
})
export class HeroesModule { }
