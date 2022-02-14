import { Component, OnInit } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ACTIONS, IFood, MyAppState } from '../food.reducer';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss']
})
export class FoodListComponent implements OnInit {

  foods$: Observable<Array<IFood>> | undefined
  constructor(private store: Store<MyAppState>) { 
    this.foods$ = store.select('foods');
  }

  ngOnInit(): void {
    this.store.dispatch({
      type: ACTIONS.GET_FOODS
    })
  }

  deleteFood(food: IFood) {
    let deleteItem = {
      type: ACTIONS.REMOVE_FOOD,
      payload: food
    }
    this.store.dispatch(deleteItem);
  }

}
