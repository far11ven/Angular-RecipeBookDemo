import { Injectable, EventEmitter } from '@angular/core';

import { Ingredient } from '../ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingredientsChanged =  new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Oranges', 10),
  ];

  constructor() { }

  getIngredients() : Ingredient[] {
    return this.ingredients.slice();
  }

  addIngredients(newIngredient: Ingredient) {
    this.ingredients.push(newIngredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}
