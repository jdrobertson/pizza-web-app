import { GenericModel } from './generic-model.model';

export interface PizzaBaseSize extends GenericModel {
    name: string;
    inches: number;
    pizzaBase: PizzaBaseSize;
}