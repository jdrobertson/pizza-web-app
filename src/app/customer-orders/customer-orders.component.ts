import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { CustomerOrderService } from './shared/customer-order.service';
import { MatDialog } from '@angular/material/dialog';
import { CustomerOrderSummaryComponent } from './customer-order-summary/customer-order-summary.component';

@Component({
  selector: 'app-customer-orders',
  templateUrl: './customer-orders.component.html',
  styleUrls: ['./customer-orders.component.scss']
})
export class CustomerOrdersComponent implements OnInit {

  displayedColumns: string[] = ['actions', 'customerName', 'customerAddress', 'pizzaQuantity', 'fulfilled'];

  customerOrders$ = this.customerOrderService.getCustomerOrders();

  constructor(private customerOrderService: CustomerOrderService,
              private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  onClick(customerOrderId: number) {
    const dialogRef = this.dialog.open(
      CustomerOrderSummaryComponent,
    );
  }

}
