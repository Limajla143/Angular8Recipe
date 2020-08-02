import { NgModule } from '@angular/core';
import { AuthComponent } from './auth.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{path: '', component: AuthComponent}]

@NgModule({
    declarations: [AuthComponent],
    imports: [FormsModule,
        SharedModule,
        RouterModule.forChild(routes)]
})

export class AuthModule {}