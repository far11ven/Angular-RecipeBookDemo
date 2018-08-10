import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../../../shared/recipe.model';
import { RecipeService } from '../../../shared/services/recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private recipeService : RecipeService) { }

  ngOnInit() {
  }

  onSelected() {
    this.recipeService.selectdRecpie.emit(this.recipe);
    console.log('passed recipe :' + this.recipe.name);
  }

}
