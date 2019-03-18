import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClosureComponent } from './closure.component';

const routes: Routes = [
    {
        path: '',
        component: ClosureComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClosureRoutingModule { }
