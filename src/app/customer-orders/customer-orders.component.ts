import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { CustomerOrderService } from './shared/customer-order.service';

@Component({
  selector: 'app-customer-orders',
  templateUrl: './customer-orders.component.html',
  styleUrls: ['./customer-orders.component.scss']
})
export class CustomerOrdersComponent implements OnInit {

  displayedColumns: string[] = ['customerName', 'customerAddress', 'pizzaQuantity', 'fulfilled'];

  customerOrders$ = this.customerOrderService.getCustomerOrders();

  data$ = this.customerOrders$.pipe(
    map(customerOrders =>
      customerOrders.map(customerOrder => ({
          id: customerOrder.id,
          customerName: customerOrder.customerName,
          customerAddress: customerOrder.customerAddress,
          pizzaQuantity: customerOrder.pizzas.length,
          fulfilled: customerOrder.fulfilled ? 'Yes' : 'No',
      }))
    ),
  );

  constructor(private customerOrderService: CustomerOrderService) { }

  ngOnInit(): void {
  }

}
