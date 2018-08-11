import { Component, OnInit, Input } from '@angular/core';

import { Recipe } from '../../shared/recipe.model';
import { RecipeService } from '../../shared/services/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private recipeServiece : RecipeService) { }

  ngOnInit() {  }

  addToShoppingList(){

    this.recipeServiece.addIngredientsToShoppingList(this.recipe.ingredients);

  }

}
