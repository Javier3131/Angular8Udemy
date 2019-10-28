import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { RecipeService } from './recipe.service';
=======
import { Recipe } from './recipe.model';

>>>>>>> a50bc3853a44cd1034edfccc6c930c034abcef85

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

<<<<<<< HEAD
  constructor() { }

  ngOnInit() {
=======
  selectedRecipe: Recipe;

  constructor() { }

  ngOnInit() {
    
>>>>>>> a50bc3853a44cd1034edfccc6c930c034abcef85
  }

}
