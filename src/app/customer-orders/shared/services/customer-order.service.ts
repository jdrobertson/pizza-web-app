import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { CustomerOrder, CustomerOrderCreateDto, CustomerOrderUpdateDto } from '../models/customer-order.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerOrderService {

  private apiUrl = 'http://localhost:8080/customerorders';

  constructor(private httpClient: HttpClient) { }

  public createCustomerOrder(customerOrderCreateDto: CustomerOrderCreateDto) {
    return this.httpClient.post<CustomerOrderCreateDto>(this.apiUrl, customerOrderCreateDto);
  }

  public getCustomerOrders() {
    return this.httpClient.get<CustomerOrder[]>(this.apiUrl);
  }

  public getCustomerOrderById(customerOrderId: number) {
    return this.httpClient.get<CustomerOrder>(`${this.apiUrl}/${customerOrderId}`);
  }

  public updateCustomerOrder(customerOrderId: number, customerOrderUpdateDto: CustomerOrderUpdateDto) {
    return this.httpClient.patch<CustomerOrder>(`${this.apiUrl}/${customerOrderId}`, customerOrderUpdateDto);
  }
}
