import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { map, tap, take, exhaustMap } from "rxjs/operators";
import { AuthService } from '../auth/auth.service';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
    url: string = 'https://angular-udemy-754da.firebaseio.com/';
    constructor(private http: HttpClient,
        private recipeService: RecipeService,
        private authService: AuthService) { }

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
        // const endPoint: string = 'recipes.json';

        // // take just take 1 item and then unsubscribe itself
        // return this.authService.user.pipe(
        //     take(1),
        //     // exhaustMap: replace exterior observable (authService.user)  for this http observable.
        //     exhaustMap(user => {
        //         return this.http
        //             .get<Recipe[]>(
        //                 this.url + endPoint,
        //                 {
        //                     params: new HttpParams().set('auth', user.token)
        //                 }
        //             );
        //     }),
        //     map(recipes => {
        //         return recipes.map(recipe => {
        //             // ...recipe copy all the data and properties of the object
        //             return {
        //                 ...recipe,
        //                 ingredients: recipe.ingredients ? recipe.ingredients : []
        //             };
        //         });
        //     }),
        //     tap(recipes => {
        //         this.recipeService.setRecipes(recipes);
        //     })
        // );

        const endPoint: string = 'recipes.json';
        return this.http
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
                }),
                tap(recipes => {
                    this.recipeService.setRecipes(recipes);
                })
            );
    }
}