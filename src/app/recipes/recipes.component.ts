import { Component, OnInit, OnDestroy } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit, OnDestroy {

  selectedRecipe: Recipe | null = null;  // Currently selected recipe (or null if none selected)
  recipes: Recipe[] = [];  // List of all recipes to display
  private subscription!: Subscription;  // Subscription to recipe changes for cleanup

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {  // Initially load all recipes from the service
    this.recipes = this.recipeService.getRecipes();
  // Subscribe to changes in the recipe list
    this.subscription = this.recipeService.recipesChanged.subscribe((recipes: Recipe[]) => {
      this.recipes = recipes;
 // If a recipe was selected before, update the reference to the new instance or clear if deleted
      if (this.selectedRecipe) {
        const updated = this.recipes.find(r => r.name === this.selectedRecipe!.name);
        this.selectedRecipe = updated ? updated : null;
      }
    });
  }
  // Cleanup the subscription when the component is destroyed to avoid memory leaks
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
onFavoriteToggled(index: number) {   // Called when favorite toggle event occurs in the recipe list
  this.recipeService.toggleFavorite(index);
}
  onRecipeSelected(recipe: Recipe) {  // Called when a recipe is selected from the list
    this.selectedRecipe = recipe;
  }
// Called when a recipe has been edited/updated in the detail view
  onRecipeUpdated(updatedRecipe: Recipe) {
    if (!this.selectedRecipe) return; // Safety check
// Find index of the currently selected recipe
    const index = this.recipes.findIndex(r => r === this.selectedRecipe);
    if (index !== -1) {
      this.recipeService.updateRecipe(index, updatedRecipe); // Update recipe via service and update local reference
      this.selectedRecipe = updatedRecipe;
    }
  }
// Called when the delete action is triggered from the detail view
  onRecipeDeleted() {
    if (!this.selectedRecipe) return;

    const index = this.recipes.findIndex(r => r === this.selectedRecipe);   // Find index of the currently selected recipe
    if (index !== -1) {
      this.recipeService.deleteRecipe(index); // Delete recipe via service and clear the selected recipe
      this.selectedRecipe = null;
    }
  }
 // Called when a new recipe is requested (e.g., from the list component)
  onNewRecipe() {
    this.selectedRecipe = new Recipe('', '', '', []);  // Initialize a new empty recipe and select it to edit
  }
}
