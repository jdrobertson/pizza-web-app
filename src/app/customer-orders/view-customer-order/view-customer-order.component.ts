import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CustomerOrderService } from '../shared/services/customer-order.service';

@Component({
  selector: 'app-view-customer-order',
  templateUrl: './view-customer-order.component.html',
  styleUrls: ['./view-customer-order.component.scss']
})
export class ViewCustomerOrderComponent {

  customerOrder$ = this.customerOrderService.getCustomerOrderById(this.data.customerOrderId);

  constructor(private customerOrderService: CustomerOrderService,
              @Inject(MAT_DIALOG_DATA) public data: {customerOrderId: number},
              private dialogRef: MatDialogRef<ViewCustomerOrderComponent>) { }

  onMarkAsFulfilled() {
    this.customerOrderService.updateCustomerOrder(
      this.data.customerOrderId,
      {
        fulfilled: true,
      },
    ).subscribe({
      next: () => this.dialogRef.close(true),
    });
  }

  onClose() {
    this.dialogRef.close(false);
  }

}
