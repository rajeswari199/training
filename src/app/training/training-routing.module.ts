import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
            {
                path: 'steps',
                loadChildren: './steps-problem/steps.module#StepsModule',
            },
            {
                path: 'four-connect',
                loadChildren: './four-connect/four-connect.module#FourConnectModule',
            },
            {
                path: 'flames',
                loadChildren: './flames/flames.module#FlamesModule'
            },
            {
                path: 'power-set',
                loadChildren: './power-set/power-set.module#PowerSetModule'
            },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TrainingRoutingModule { }
