import { GenericModel } from './generic-model.model';
import { PizzaBaseSize } from './pizza-base-size.model';

export interface PizzaBase extends GenericModel {
    name: string;
    pizzaBaseSizes: PizzaBaseSize[];
}