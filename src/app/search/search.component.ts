import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipes/recipe.service'; 
import { Recipe } from '../recipes/recipe.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',     // Component selector used in HTML
  templateUrl: './search.component.html',  // HTML template
  styleUrls: ['./search.component.css']    // Optional CSS styles
})
export class SearchComponent implements OnInit {
  searchTerm = '';  // The text entered by the user
  recipes: Recipe[] = [];  // Full list of recipes
  filteredRecipes: Recipe[] = [];  // Filtered results shown to user
  selectedRecipe: Recipe | null = null;  // Currently selected recipe
// Suggested keyword tags (shown under search input)
  searchKeywords = ['Pasta', 'Chicken', 'Shrimp', 'Cake'];

  constructor(
    private recipeService: RecipeService,  // Inject the recipe service
    private router: Router  // Router (if needed for future navigation)
  ) {}
 // When component is initialized
  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();    // Load all recipes from the service
    this.filteredRecipes = [...this.recipes];  // Initially show all recipes
  }
  // Called when the user searches by typing or pressing the button
  search() {
    const term = this.searchTerm.trim().toLowerCase();  // Normalize search term
    if (!term) {
      this.filteredRecipes = [...this.recipes];   // Show all recipes if no search term
    } else {
      this.filteredRecipes = this.recipes.filter(recipe =>
        recipe.name.toLowerCase().includes(term)   // Filter recipes by name
      );
    }
    this.selectedRecipe = null;   // Clear any selected recipe
  }
 // Called when a user clicks a suggested keyword badge
  searchByKeyword(keyword: string) {
    this.searchTerm = keyword;    // Set the search term to the keyword
    this.search();    // Run the search function
  }
  // Called when a user clicks a recipe card
  onRecipeClick(recipe: Recipe) {
    this.selectedRecipe = recipe;    // Display recipe details below
    // You could also navigate to a detail page if you wanted:
    // this.router.navigate(['/recipes', recipe.id]);
  }
}
