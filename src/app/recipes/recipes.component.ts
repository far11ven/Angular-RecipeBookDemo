import { Component, OnInit } from '@angular/core';

import { Recipe } from '../shared/recipe.model';
import { RecipeService } from '../shared/services/recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe;

  constructor(private recipeService : RecipeService) { }

  ngOnInit() {
    this.recipeService.selectdRecpie.subscribe(
      (recipe: Recipe) => {
         this.selectedRecipe = recipe;

         console.log('Rceived recipe :' + this.selectedRecipe.name);
      }
    )
  }

}
