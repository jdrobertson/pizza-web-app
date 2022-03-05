import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { map, Observable, tap } from 'rxjs';
import { PizzaBaseSize } from 'src/app/shared/models/pizza-base-size.model';
import { PizzaBase } from 'src/app/shared/models/pizza-base.model';
import { PizzaTopping } from 'src/app/shared/models/pizza-topping.model';
import { PizzaBaseService } from 'src/app/shared/services/pizza-base.service';
import { PizzaToppingService } from 'src/app/shared/services/pizza-topping.service';
import { CustomerOrderService } from '../shared/services/customer-order.service';

@Component({
  selector: 'app-add-customer-order',
  templateUrl: './add-customer-order.component.html',
  styleUrls: ['./add-customer-order.component.scss']
})
export class AddCustomerOrderComponent {

  customerDetailsForm = this.fb.group({
    customerName: ['', Validators.required],
    customerAddress: ['', Validators.required],
  });

  pizzaSelectionForm = this.fb.group({
    pizzaTopping: ['', Validators.required],
    pizzaBase: ['', Validators.required],
    pizzaBaseSize: ['', Validators.required],
  });

  toppings = new FormControl();

  pizzaToppings: PizzaTopping[] = [];
  pizzaToppings$ = this.pizzaToppingService.getPizzaToppings()
  .pipe(
    tap(pizzaToppings => this.pizzaToppings = pizzaToppings),
  );

  pizzaBases: PizzaBase[] = [];
  pizzaBases$ = this.pizzaBaseService.getPizzaBases()
  .pipe(
    tap(pizzaBases => this.pizzaBases = pizzaBases),
  );

  filteredPizzaBaseSizes$: Observable<PizzaBaseSize[]> = this.pizzaSelectionForm.controls['pizzaBase'].valueChanges
  .pipe(
    map(pizzaBase => pizzaBase.pizzaBaseSizes),
    tap(() => this.pizzaSelectionForm.controls['pizzaBaseSize'].reset())
  );

  orderPizzas: any[] = [];

  constructor(private fb: FormBuilder,
              private pizzaToppingService: PizzaToppingService,
              private pizzaBaseService: PizzaBaseService,
              private customerOrderService: CustomerOrderService,
              private snackBar: MatSnackBar) { }

  onAddPizza() {
    const pizza = {
      pizzaTopping: this.pizzaSelectionForm.controls['pizzaTopping'].value,
      pizzaBase: this.pizzaSelectionForm.controls['pizzaBase'].value,
      pizzaBaseSize: this.pizzaSelectionForm.controls['pizzaBaseSize'].value,
    };

    this.orderPizzas = [... this.orderPizzas, pizza];
  }

  onSubmitOrder() {
    this.customerOrderService.createCustomerOrder({
      customerName: this.customerDetailsForm.controls['customerName'].value,
      customerAddress: this.customerDetailsForm.controls['customerAddress'].value,
      pizzas: this.orderPizzas.map(orderPizza => ({
        pizzaBaseSize: {id: orderPizza.pizzaBaseSize.id},
        pizzaTopping: {id: orderPizza.pizzaTopping.id},
      })),
    }).subscribe({
      next: () => {
        this.snackBar.open(
          "Order submitted successfully!",
          "OK",
          {
            verticalPosition: 'top',
            horizontalPosition: 'right',
            duration: 5000,
          }
        );
        this.pizzaSelectionForm.reset();
        this.orderPizzas = [];
      },
      error: () => this.snackBar.open(
        "Uh oh! Sorry, something went wrong.",
        "OK",
        {
          verticalPosition: 'top',
          horizontalPosition: 'right',
        }
      ),
    });
  }
}
