import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { ApiMockModule } from '@ng-stack/api-mock';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FakeApiService } from './api-mock.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule,
    ApiMockModule.forRoot(FakeApiService)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
