import { Component, OnInit } from '@angular/core';
import { CustomerOrderService } from './shared/services/customer-order.service';
import { MatDialog } from '@angular/material/dialog';
import { ViewCustomerOrderComponent } from './view-customer-order/view-customer-order.component';
import { BehaviorSubject, filter, switchMap } from 'rxjs';

@Component({
  selector: 'app-customer-orders',
  templateUrl: './customer-orders.component.html',
  styleUrls: ['./customer-orders.component.scss']
})
export class CustomerOrdersComponent {

  displayedColumns: string[] = ['actions', 'customerName', 'customerAddress', 'pizzaQuantity', 'fulfilled'];

  reloadCustomerOrders$ = new BehaviorSubject(true);

  customerOrders$ = this.reloadCustomerOrders$.pipe(
    switchMap(() => this.customerOrderService.getCustomerOrders()),
  );

  constructor(private customerOrderService: CustomerOrderService,
              private dialog: MatDialog) { }

  onClick(customerOrderId: number) {
    const dialogRef = this.dialog.open(
      ViewCustomerOrderComponent,
      {
        data: {
          customerOrderId,
        },
        width: '75%',
      }
    );

    dialogRef.afterClosed().subscribe({
      next: (reloadRequested => {
        if (reloadRequested) {
          this.reloadCustomerOrders$.next(true);
        }
      }),
    });
  }

  onRefresh() {
    this.reloadCustomerOrders$.next(true);
  }
}
