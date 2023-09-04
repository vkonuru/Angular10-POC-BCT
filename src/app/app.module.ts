import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialCompsModule } from './shared/material-comps/material-comps.module';
import { TabsCompComponent } from './components/tabs-comp/tabs-comp.component';
import { GridCompComponent } from './components/grid-comp/grid-comp.component';

@NgModule({
  declarations: [AppComponent, GridCompComponent, TabsCompComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialCompsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
