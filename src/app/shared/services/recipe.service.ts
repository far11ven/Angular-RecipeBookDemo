import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../ingredient.model';
import { Recipe } from '../recipe.model';
import {ShoppingListService} from '../../shared/services/shopping-list.service';


@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  selectdRecpie = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('A Test Recipe',
      'This is simply a test',
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
      
      [new Ingredient('bun', 1),
       new Ingredient('hun', 1)
      ]
    ),

    new Recipe('Another Test Recipe',
      'This is simply a test',
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',

      [
        new Ingredient('bun', 1),
        new Ingredient('hun', 1)
      ]
    )
  ];

  constructor(private shoppingListService: ShoppingListService) { }

  getRecpies() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients : Ingredient[]){

    for ( let i = 0; i < ingredients.length ; i++) {
      this.shoppingListService.addIngredients(ingredients[i]);
     };
    

  }
}
