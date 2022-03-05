import { GenericModel } from './generic-model.model';
import { PizzaBaseSize } from './pizza-base-size.model';
import { PizzaTopping } from './pizza-topping.model';

export interface Pizza extends GenericModel {
    pizzaBaseSize: PizzaBaseSize;
    pizzaTopping: PizzaTopping;
}