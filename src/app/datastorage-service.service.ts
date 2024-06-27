import { Injectable } from '@angular/core';
import { RecipeService } from './recipes/recipe.service';
import { HttpClient } from '@angular/common/http';
import { Recipe } from './recipes/recipe.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DatastorageServiceService {
  constructor(private recipeService: RecipeService, private http: HttpClient) {}

  recipeStorge() {
    const recipe = this.recipeService.getRecipes();
    // console.log(recipe);
    this.http
      .put(
        'https://recipe-book-5f7e6-default-rtdb.europe-west1.firebasedatabase.app/recipe.json',
        recipe
      )
      .subscribe((response) => {
        // console.log(response);
      });
  }

  fetchRecipes() {
    this.http
      .get<Recipe[]>(
        'https://recipe-book-5f7e6-default-rtdb.europe-west1.firebasedatabase.app/recipe.json'
      )
      .pipe(
        map((recipes) => {
          return recipes.map((recipe) => {
            return {
              ...recipe,
              ingredients: recipe.ingredients ? recipe.ingredients : [],
            };
          });
        })
      )
      .subscribe((recipes) => {
        this.recipeService.overrideRecipeData(recipes);
      });
  }
}
