import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClosureComponent } from './closure/closure.component';
import { TrainingComponent } from './training.component';

const routes: Routes = [
    {
        path: '',
        component: TrainingComponent,
        children: [

            {
                path: 'closure',
                loadChildren: './closure/closure.module#ClosureModule',
            },
            {
                path: 'set',
                loadChildren: './set/set.module#SetModule',
            },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TrainingRoutingModule { }
