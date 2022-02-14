import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodFormComponent } from './food-form/food-form.component';
import { FoodListComponent } from './food-list/food-list.component';

const routes: Routes = [
  {
    path: '', 
    component: FoodFormComponent,
    children: [
      {
        path: '',
        component: FoodListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
