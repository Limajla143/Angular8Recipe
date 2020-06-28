import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();
  // recipe: Recipe[] = [
  //   new Recipe('A test recipe', 'Sample recipe',
  //   'https://assets.bonappetit.com/photos/5db1ce83358b460009148cb7/3:2/w_5120,c_limit/Basically-Spinach-Tarte-Recipe.jpg',
  //   [new Ingredient('Noodles', 4), new Ingredient('Cheese', 3)])
  // ];
  private recipe: Recipe[] = []

  constructor(private shoppingList: ShoppingListService) { }

  setRecipes(recipes: Recipe[]){
    this.recipe = recipes;
    this.recipesChanged.next(this.recipe.slice());
  }

  getRecipes(){
    return this.recipe.slice();
  }

  getRecipe(id: number) {
    return this.recipe[id];
  }

  addRecipe(recipe: Recipe){
    this.recipe.push(recipe);
    this.recipesChanged.next(this.recipe.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe){
    this.recipe[index] = newRecipe;
    this.recipesChanged.next(this.recipe.slice());
  }

  deleteRecipe(index: number){
    this.recipe.splice(index, 1);
    this.recipesChanged.next(this.recipe.slice());
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.shoppingList.addIngredients(ingredients);
  }

}
