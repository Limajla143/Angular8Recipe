import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Recipe } from '../recipes/recipe.model';
import { RecipeService } from '../recipes/recipe.service';
import {map, tap, take, exhaustMap} from 'rxjs/operators';
import { AuthServiceService } from '../auth/auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

constructor(private http: HttpClient, private recipeService: RecipeService, private authService: AuthServiceService) { }

onRecipeStores(){
  const recipes = this.recipeService.getRecipes();
  this.http.put('https://ng-recipebook-e3d2b.firebaseio.com/recipes.json', recipes)
  .subscribe(response => {
    console.log(response);
  });
}

onFetchRecipes(){
    return this.http.get<Recipe[]>('https://ng-recipebook-e3d2b.firebaseio.com/recipes.json'
    ).pipe(map(recipes => {
    return recipes.map(recipe => {
      return { ...recipe, ingredients: recipe.ingredients ? recipe.ingredients: []};
    });
  }),
  tap(recipes => {
    this.recipeService.setRecipes(recipes);
  }));
}

}
