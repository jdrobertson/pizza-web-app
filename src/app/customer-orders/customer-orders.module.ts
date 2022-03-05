import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerOrdersRoutingModule } from './customer-orders-routing.module';
import { CustomerOrdersComponent } from './customer-orders.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatGridListModule } from '@angular/material/grid-list'
import { MatSelectModule } from '@angular/material/select'
import { ViewCustomerOrderComponent } from './view-customer-order/view-customer-order.component';
import { AddCustomerOrderComponent } from './add-customer-order/add-customer-order.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { PizzaListComponent } from './shared/components/pizza-list/pizza-list.component';

@NgModule({
  declarations: [
    CustomerOrdersComponent,
    AddCustomerOrderComponent,
    ViewCustomerOrderComponent,
    PizzaListComponent,
  ],
  imports: [
    CommonModule,
    CustomerOrdersRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatGridListModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
  ]
})
export class CustomerOrdersModule { }
