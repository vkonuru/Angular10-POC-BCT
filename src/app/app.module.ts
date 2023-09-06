import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialCompsModule } from './shared/material-comps/material-comps.module';
import { TabsCompComponent } from './components/tabs-comp/tabs-comp.component';
import { GridCompComponent } from './components/grid-comp/grid-comp.component';
import { FormCompComponent } from './components/form-comp/form-comp.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { GraphCompComponent } from './components/graph-comp/graph-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    GridCompComponent,
    TabsCompComponent,
    FormCompComponent,
    GraphCompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialCompsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NgApexchartsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
