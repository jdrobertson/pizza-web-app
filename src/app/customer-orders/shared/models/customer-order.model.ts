import { Pizza } from 'src/app/shared/models/pizza.model';

export interface CustomerOrder {
    id: number;
    customerName: string;
    customerAddress: string;
    pizzas: Pizza[];
    fulfilled: boolean;
}

export interface CustomerOrderUpdateDto {
    fulfilled: boolean;
}

export interface CustomerOrderCreateDto {
    customerName: string;
    customerAddress: string;
    pizzas: CustomerOrderCreatePizzaDto[];
}

export interface CustomerOrderCreatePizzaDto {
    pizzaBaseSize: {id: number};
    pizzaTopping: {id: number};
}