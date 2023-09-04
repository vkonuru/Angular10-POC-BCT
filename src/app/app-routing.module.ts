import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GridCompComponent } from './components/grid-comp/grid-comp.component';
import { GraphCompComponent } from './components/graph-comp/graph-comp.component';
import { FormCompComponent } from './components/form-comp/form-comp.component';
import { TabsCompComponent } from './components/tabs-comp/tabs-comp.component';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsCompComponent,
  },
  {
    path: 'grid',
    component: GridCompComponent,
  },
  {
    path: 'form',
    component: FormCompComponent,
  },
  {
    path: 'graph',
    component: GraphCompComponent,
  },
  { path: '', redirectTo: '/tabs', pathMatch: 'full' },
  { path: '**', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
