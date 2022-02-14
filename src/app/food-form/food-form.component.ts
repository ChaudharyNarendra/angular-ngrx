import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Action, Store } from '@ngrx/store';
import { ACTIONS, IFood, MyAppState } from '../food.reducer';

@Component({
  selector: 'app-food-form',
  templateUrl: './food-form.component.html',
  styleUrls: ['./food-form.component.scss']
})
export class FoodFormComponent implements OnInit {

  food!: IFood;
  foodForm = this.fb.group({
    fid: ['', {
      validators: [
        Validators.required,
      ]
    }],
    foodName: ['', {
      validators: [
        Validators.required,
      ]
    }],
    description: ['', {
      validators: [Validators.required]
    }],
    color: ['', Validators.required],
    group: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private store: Store<MyAppState>) { }

  ngOnInit(): void {
  }

  addFood(food: IFood) {
    let addAction = {
      type: ACTIONS.ADD_FOOD,
      payload: Object.assign({}, food)
    }
    this.store.dispatch(addAction);
    this.foodForm.reset();
  }

}
