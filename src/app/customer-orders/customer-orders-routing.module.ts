import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCustomerOrderComponent } from './add-customer-order/add-customer-order.component';
import { CustomerOrdersComponent } from './customer-orders.component';

const routes: Routes = [
  {
    path: '',
    component: CustomerOrdersComponent,
  },
  {
    path: 'add',
    component: AddCustomerOrderComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerOrdersRoutingModule { }
