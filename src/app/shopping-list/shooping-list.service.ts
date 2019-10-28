// import { EventEmitter } from '@angular/core';
import { Subject } from "rxjs";
import { Ingredient } from '../shared/ingredient.model';
<<<<<<< HEAD


export class ShoppingListService {

    // ingredientsChanged = new EventEmitter<Ingredient[]>();
    ingredientsChanged = new Subject<Ingredient[]>();
=======
import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

export class ShoppingListService {

    ingredientsChanged = new EventEmitter<Ingredient[]>();
    startedEditing = new Subject<number>();
>>>>>>> a50bc3853a44cd1034edfccc6c930c034abcef85

    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10)
    ];

    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        // this.ingredientsChanged.emit(this.ingredients.slice());
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    addIngridients(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients);
        // this.ingredientsChanged.emit(this.ingredients.slice());
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    getIngredient(index: number) {
        return this.ingredients[index];
    }

    updateIngredient(index: number, newIngredient: Ingredient) {
        this.ingredients[index] = newIngredient;
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    deleteIngredient(index: number){
        this.ingredients.splice(index, 1);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
}