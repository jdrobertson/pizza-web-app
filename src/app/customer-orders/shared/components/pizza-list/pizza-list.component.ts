import { Component, Input, OnInit } from '@angular/core';
import { Pizza } from 'src/app/shared/models/pizza.model';

@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.scss']
})
export class PizzaListComponent {

  @Input() dataSource: Pizza[] = [];

  displayedColumns: string[] = ['pizzaTopping', 'pizzaBase', 'pizzaBaseSize'];

  constructor() { }

}
