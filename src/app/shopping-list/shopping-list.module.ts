import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

import { ShoppingListComponent } from './shopping-list.component';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';

const routes: Routes = [{path: '', component: ShoppingListComponent}];

@NgModule({
    declarations: [ShoppingListComponent, ShoppingEditComponent],
    imports: [
        FormsModule,
        SharedModule,
        RouterModule.forChild(routes)]
})

export class ShoppingListModule {}