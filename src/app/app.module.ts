import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { food_reducer } from './food.reducer';
import { FoodListComponent } from './food-list/food-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FoodFormComponent } from './food-form/food-form.component';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { FoodEffects } from './food-effects';

@NgModule({
  declarations: [
    AppComponent,
    FoodListComponent,
    FoodFormComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    StoreModule.forRoot({foods: food_reducer}),
    EffectsModule.forRoot([FoodEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
