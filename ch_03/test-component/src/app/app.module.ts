import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MainComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContainerComponent } from './container/container.component';
import { DummyComponent } from './container/dummy.component';
import { Dummy2Component } from './container/dummy2.component';


@NgModule({
  imports: [BrowserModule],
  declarations: [MainComponent, HeaderComponent, ContainerComponent, DummyComponent, Dummy2Component],
  bootstrap: [MainComponent, DummyComponent]
})
export class AppModule { }

