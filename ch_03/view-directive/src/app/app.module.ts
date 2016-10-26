import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyDirective } from './my.directive';
import { GeekMarkerPipe } from './geek-marker.pipe';
import { HonorPipe } from './honor.pipe';


@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, MyDirective, HonorPipe, GeekMarkerPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }

