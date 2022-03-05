import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PizzaTopping } from '../models/pizza-topping.model';

@Injectable({
  providedIn: 'root'
})
export class PizzaToppingService {

  apiUrl = 'http://localhost:8080/pizzatoppings';

  constructor(private httpClient: HttpClient) { }

  public getPizzaToppings() {
    return this.httpClient.get<PizzaTopping[]>(this.apiUrl);
  }

}
