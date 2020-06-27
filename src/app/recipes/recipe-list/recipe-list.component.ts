import { Recipe } from './../recipe.model';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent implements OnInit {
  @Output() onSelectedRecipe = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
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

  onRecipeSelected(recipe: Recipe) {
    this.onSelectedRecipe.emit(recipe);
  }

  ngOnInit(): void {}
}
