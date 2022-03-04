import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerOrdersRoutingModule } from './customer-orders-routing.module';
import { CustomerOrdersComponent } from './customer-orders.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    CustomerOrdersComponent,
  ],
  imports: [
    CommonModule,
    CustomerOrdersRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
  ]
})
export class CustomerOrdersModule { }
