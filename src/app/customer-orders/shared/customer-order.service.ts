import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { CustomerOrder } from './customer-order.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerOrderService {

  apiUrl = 'http://localhost:8080/customerorders';

  constructor(private httpClient: HttpClient) { }

  public getCustomerOrders() {
    return this.httpClient.get<CustomerOrder[]>(this.apiUrl);
  }

  public getCustomerOrderById(customerOrderId: number) {
    return this.httpClient.get<CustomerOrder>(`${this.apiUrl}/${customerOrderId}`);
  }
}
