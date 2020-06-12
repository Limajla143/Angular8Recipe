import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  Ingredients: Ingredient[];
  constructor(private shoppingService: ShoppingListService) { }

  ngOnInit() {
    this.Ingredients = this.shoppingService.getIngredients();
    this.shoppingService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.Ingredients = ingredients;
      }
    )
  }

}
