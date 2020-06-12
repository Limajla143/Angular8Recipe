import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  recipe: Recipe[] = [
    new Recipe('A test recipe', 'Sample recipe',
    'https://assets.bonappetit.com/photos/5db1ce83358b460009148cb7/3:2/w_5120,c_limit/Basically-Spinach-Tarte-Recipe.jpg',
    [new Ingredient('Noodles', 4), new Ingredient('Cheese', 3)])
  ];

  constructor(private shoppingList: ShoppingListService) { }

  getRecipes(){
    return this.recipe.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.shoppingList.addIngredients(ingredients);
  }

}
