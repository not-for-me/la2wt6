import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MultiLangSupportModule } from './multi-lang/multi-lang.module';

import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule, MultiLangSupportModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

