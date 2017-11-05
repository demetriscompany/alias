import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TimerComponent } from './timer/timer.component';
import { WordComponent } from './word/word.component';
import { HttpModule } from '@angular/http'

@NgModule({
  declarations: [
    AppComponent,
    TimerComponent,
    WordComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
