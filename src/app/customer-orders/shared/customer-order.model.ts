import { Pizza } from 'src/app/shared/pizza.model';

export interface CustomerOrder {
    customerName: string;
    customerAddress: string;
    pizzas: Pizza[];
    fulfilled: boolean;
}