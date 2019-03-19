import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StepsComponent } from './steps.component';
import { StepsRoutingModule } from './steps-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        StepsComponent,
    ],
    imports: [
        StepsRoutingModule,
        CommonModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [StepsComponent]
})
export class StepsModule { }
