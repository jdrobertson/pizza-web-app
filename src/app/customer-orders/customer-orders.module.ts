import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerOrdersRoutingModule } from './customer-orders-routing.module';
import { CustomerOrdersComponent } from './customer-orders.component';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    CustomerOrdersComponent,
  ],
  imports: [
    CommonModule,
    CustomerOrdersRoutingModule,
    MatButtonModule,
  ]
})
export class CustomerOrdersModule { }
