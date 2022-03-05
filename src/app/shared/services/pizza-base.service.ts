import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PizzaBase } from '../models/pizza-base.model';

@Injectable({
  providedIn: 'root'
})
export class PizzaBaseService {

  apiUrl = 'http://localhost:8080/pizzabases';

  constructor(private httpClient: HttpClient) { }

  public getPizzaBases() {
    return this.httpClient.get<PizzaBase[]>(this.apiUrl);
  }

}
