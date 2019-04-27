import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PowerSetRoutingModule } from './power-set-routing.module';
import { PowerSetComponent } from './power-set.component';

@NgModule({
  declarations: [PowerSetComponent],
  imports: [
    CommonModule,
    FormsModule,
    PowerSetRoutingModule
  ]
})
export class PowerSetModule { }
