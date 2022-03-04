import { PizzaBaseSize } from './pizza-base-size.model';
import { PizzaTopping } from './pizza-topping.model';

export interface Pizza {
    name: string;
    pizzaBaseSize: PizzaBaseSize;
    pizzaTopping: PizzaTopping;
}