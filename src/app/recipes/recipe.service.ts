import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { EventEmitter, Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'An awesome burger',
      "The tastest burger you've ever eat",
      'https://image.freepik.com/free-photo/delicious-beef-burgers-wooden-board_23-2148290634.jpg',
      [
        new Ingredient('meat', 0.5),
        new Ingredient('bread', 1),
        new Ingredient('cheeze', 0.2),
      ]
    ),
    new Recipe(
      'An awesome pizza',
      "The tastest pizza you've ever eat",
      'https://image.freepik.com/free-photo/pizza-pizza-filled-with-tomatoes-salami-olives_140725-1200.jpg',
      [
        new Ingredient('cheeze', 0.2),
        new Ingredient('tomato', 0.5),
        new Ingredient('mushrooms', 0.2),
      ]
    ),
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes(): Recipe[] {
    return [...this.recipes];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  getRecipe(id: number): Recipe {
    return this.recipes[id];
  }
}
