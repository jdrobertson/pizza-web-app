import { PizzaBaseSize } from './pizza-base-size.model';

export interface PizzaBase {
    name: string;
    pizzaBaseSizes: PizzaBaseSize[];
}