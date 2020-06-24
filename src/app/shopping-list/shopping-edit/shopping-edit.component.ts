import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') slForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;
  constructor(private shoppingService: ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.shoppingService.startedEditing.subscribe(
      (index: number) => {
        this.editedItemIndex = index;
        this.editMode = true;
        this.editedItem = this.shoppingService.getIngredient(index);
        this.slForm.setValue({
          'name': this.editedItem.name,
          'amount': this.editedItem.amount
        });
      }
    );
  }

  onAddItem(form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    //this.shoppingService.onAddIngredient(newIngredient);

    if(this.editMode){
      this.shoppingService.updateIngredients(this.editedItemIndex, newIngredient);
    }
    else{
      this.shoppingService.onAddIngredient(newIngredient);
    }
    this.editMode = false;
    this.slForm.reset();
  }

  onReset(){
    this.editMode = false;
    this.slForm.reset();
  }

  onDelete(){
    this.shoppingService.onDeleteIngredient(this.editedItemIndex);
    this.onReset();
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
