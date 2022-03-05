import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerOrdersRoutingModule } from './customer-orders-routing.module';
import { CustomerOrdersComponent } from './customer-orders.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatGridListModule } from '@angular/material/grid-list'
import { ViewCustomerOrderComponent } from './view-customer-order/view-customer-order.component';
import { AddCustomerOrderComponent } from './add-customer-order/add-customer-order.component';

@NgModule({
  declarations: [
    CustomerOrdersComponent,
    AddCustomerOrderComponent,
    ViewCustomerOrderComponent,
  ],
  imports: [
    CommonModule,
    CustomerOrdersRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatGridListModule,
  ]
})
export class CustomerOrdersModule { }
