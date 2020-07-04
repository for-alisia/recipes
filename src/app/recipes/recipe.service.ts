import { EventEmitter } from '@angular/core';

import { Recipe } from './recipe.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'An awesome burger',
      "The tastest burger you've ever eat",
      'https://image.freepik.com/free-photo/delicious-beef-burgers-wooden-board_23-2148290634.jpg'
    ),
    new Recipe(
      'An awesome pizza',
      "The tastest pizza you've ever eat",
      'https://image.freepik.com/free-photo/pizza-pizza-filled-with-tomatoes-salami-olives_140725-1200.jpg'
    ),
  ];

  getRecipes() {
    return [...this.recipes];
  }
}
