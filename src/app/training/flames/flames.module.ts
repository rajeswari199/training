import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlamesRoutingModule } from './flames-routing.module';
import { FlamesComponent } from './flames.component';

@NgModule({
  declarations: [FlamesComponent],
  imports: [
    CommonModule,
    FormsModule,
    FlamesRoutingModule
  ]
})
export class FlamesModule { }
