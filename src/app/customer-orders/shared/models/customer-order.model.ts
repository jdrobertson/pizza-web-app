import { Pizza } from 'src/app/shared/pizza.model';

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