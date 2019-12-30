import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { OrgChartModule } from '@mondal/org-chart';
import { ConverterPipe } from './converter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ConverterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    OrgChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
