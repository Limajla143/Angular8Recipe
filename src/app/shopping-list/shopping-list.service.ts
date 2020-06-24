import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();
  Ingredients: Ingredient[] = [
    new Ingredient('tomato', 5),
    new Ingredient('potato', 6)
  ];

constructor() { }

getIngredients(){
  return this.Ingredients.slice();
}

getIngredient(index: number){
  return this.Ingredients[index];
}

onAddIngredient(ingredient: Ingredient){
  this.Ingredients.push(ingredient);
  this.ingredientsChanged.next(this.Ingredients.slice());
}

addIngredients(ingredients: Ingredient[]){
  this.Ingredients.push(...ingredients);
  this.ingredientsChanged.next(this.Ingredients.slice());
}

updateIngredients(index: number, newIngredient: Ingredient){
  this.Ingredients[index] = newIngredient;
  this.ingredientsChanged.next(this.Ingredients.slice());
}

onDeleteIngredient(index: number){
  this.Ingredients.splice(index, 1);
  this.ingredientsChanged.next(this.Ingredients.slice());
}

}
