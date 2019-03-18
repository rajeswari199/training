import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainingRoutingModule } from './training-routing.module';
import { TrainingComponent } from './training.component';

@NgModule({
    declarations: [
        TrainingComponent,
    ],
    imports: [
        TrainingRoutingModule,
        CommonModule
    ],
    providers: [],
    bootstrap: [TrainingComponent]
})
export class TrainingModule { }
