import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();
  Ingredients: Ingredient[] = [
    new Ingredient('tomato', 5),
    new Ingredient('potato', 6)
  ];

constructor() { }

getIngredients(){
  return this.Ingredients.slice();
}

onAddIngredient(ingredient: Ingredient){
  this.Ingredients.push(ingredient);
  this.ingredientsChanged.emit(this.Ingredients.slice());
}

addIngredients(ingredients: Ingredient[]){
  this.Ingredients.push(...ingredients);
  this.ingredientsChanged.emit(this.Ingredients.slice());
}

}
