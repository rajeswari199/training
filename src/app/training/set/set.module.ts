import { NgModule } from '@angular/core';

import { SetComponent } from './set.component';
import { SetRoutingModule } from './set-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        SetComponent,
    ],
    imports: [
        SetRoutingModule,
        CommonModule
    ],
    providers: [],
    bootstrap: [SetComponent]
})
export class SetModule { }
