import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClosureComponent } from './closure.component';
import { ClosureRoutingModule } from './closure-routing.module';

@NgModule({
    declarations: [
        ClosureComponent,
    ],
    imports: [
        ClosureRoutingModule,
        CommonModule
    ],
    providers: [],
    bootstrap: [ClosureComponent]
})
export class ClosureModule { }
