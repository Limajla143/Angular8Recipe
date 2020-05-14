import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipe: Recipe[] = [
    new Recipe('A test recipe', 'Sample recipe',
    'https://assets.bonappetit.com/photos/5db1ce83358b460009148cb7/3:2/w_5120,c_limit/Basically-Spinach-Tarte-Recipe.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

}
