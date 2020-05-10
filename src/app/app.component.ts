import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <a routerLink="heroes">go to the heroes</a>
  <router-outlet></router-outlet>`
})
export class AppComponent {}
