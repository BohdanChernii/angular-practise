import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {BrowserModule} from "@angular/platform-browser";


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
