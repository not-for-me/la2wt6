import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome.component';

import { WelcomeMsgService } from './welcome.service';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [AppComponent, WelcomeComponent],
  providers: [WelcomeMsgService],
  bootstrap:    [AppComponent]
})
export class AppModule { }

