import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {SplashPageComponent} from '../app/splash-page/splash-page.component'; // I added this 

import{FormsModule} from '@angular/forms'; // I added this for ngModel


@NgModule({
  declarations: [
    SplashPageComponent, // I added this
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule //Needed for ngModel
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
