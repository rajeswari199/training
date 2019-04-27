import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PowerSetComponent } from './power-set.component';

const routes: Routes = [
  {
    path: '',
    component: PowerSetComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PowerSetRoutingModule { }
