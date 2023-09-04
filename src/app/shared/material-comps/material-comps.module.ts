import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatGridListModule } from '@angular/material/grid-list';

const exportModulesList = [
  MatSidenavModule,
  MatToolbarModule,
  MatTabsModule,
  MatGridListModule,
];

@NgModule({
  declarations: [],
  exports: [...exportModulesList],
})
export class MaterialCompsModule {}
