import { Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shooping-list.service';


@Injectable()
export class RecipeService {


    private recipes: Recipe[] = [
        new Recipe("Crazy Pizza",
            "A pizza that will make you go crazy",
            "https://www.gimmesomeoven.com/wp-content/uploads/2014/03/Cajun-Jambalaya-Recipe-with-Andouille-Sausage-Shrimp-and-Chicken-32.jpg",
            [
                new Ingredient('pasta', 2),
                new Ingredient('another ingredient', 4)
            ]
        ),
        new Recipe("Pasta",
            "A pasta",
            "https://ep01.epimg.net/elcomidista/imagenes/2018/06/26/receta/1530022065_262773_1530523801_media_normal.jpg",
            [
                new Ingredient('cheese', 5),
                new Ingredient('another ingredient', 1)
            ]
        )
    ];

    constructor(private slService: ShoppingListService) { }

    getRecipes() {
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngridients(ingredients);
    }

    getRecipe(id: number) {
        return this.recipes[id];
    }
}