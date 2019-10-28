import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { map } from "rxjs/operators";

@Injectable({ providedIn: 'root' })
export class DataStorageService {
    url: string = 'https://angular-udemy-754da.firebaseio.com/';
    constructor(private http: HttpClient,
        private recipeService: RecipeService) { }

    storeRecipes() {
        const endPoint: string = 'recipes.json';
        const recipes = this.recipeService.getRecipes();
        this.http.put(
            this.url + endPoint,
            recipes
        )
            .subscribe(response => {
                console.log(response);
            });
    }

    fetchRecipes() {
        const endPoint: string = 'recipes.json';
        this.http
            .get<Recipe[]>(this.url + endPoint)
            .pipe(
                map(recipes => {
                    return recipes.map(recipe => {
                        // ...recipe copy all the data and properties of the object
                        return {
                            ...recipe,
                            ingredients: recipe.ingredients ? recipe.ingredients : []
                        };
                    });
                }))
            .subscribe(recipes => {
                this.recipeService.setRecipes(recipes);
            });
    }
}