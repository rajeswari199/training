import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FourConnectRoutingModule } from './four-connect-routing.module';
import { FourConnectComponent } from './four-connect.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [FourConnectComponent],
  imports: [
    CommonModule,
    FormsModule,
    FourConnectRoutingModule
  ]
})
export class FourConnectModule { }
