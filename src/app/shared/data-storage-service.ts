import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recipe } from '../recipes/recipe.model'; 
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  private firebaseUrl = 'https://tasty-home-544d8-default-rtdb.firebaseio.com/recipes.json';

  constructor(private http: HttpClient) {}

  // Save the entire recipes array to Firebase using HTTP PUT
  storeRecipes(recipes: Recipe[]) {
    return this.http.put(this.firebaseUrl, recipes);
  }

  // Fetch recipes array from Firebase using HTTP GET
  fetchRecipes() {
    return this.http.get<Recipe[]>(this.firebaseUrl)
      .pipe(
   
        map(recipes => {
          return recipes.map(recipe => {
            return {
              ...recipe,
              ingredients: recipe.ingredients ? recipe.ingredients : []
            };
          });
        })
      );
  }
}
