import { Ingredient } from '../shared/ingredient.model';

export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;
  public ingredients: Ingredient[];

  constructor(n: string, descr: string, image: string, ingredients: Ingredient[]) {
     this.name = n;
     this.description = descr;
     this.imagePath = image;
     this.ingredients = ingredients;
  }
}
