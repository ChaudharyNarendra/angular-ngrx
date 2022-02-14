import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of, Subscriber } from "rxjs";

@Injectable()
export class FoodEffects {
    foodList$ = createEffect(() =>
        this.action$.pipe(
            ofType('GET_FOODS'),
            mergeMap(() =>
            this.httpClient.get('http://localhost:4200/assets/data.json').pipe(
                    map(data => ({ type: 'GET_FOODS_SUCCESS', payload: data })),
                    catchError(() => of({ type: 'GET_FOOD_FAILED' }))
                )
            )
        )
    );

    constructor(private action$: Actions, private httpClient: HttpClient) { }
}