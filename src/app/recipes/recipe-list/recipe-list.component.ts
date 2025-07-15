import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Recipe } from '../recipe.model';
import { Subscription } from 'rxjs';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  @Output() recipeSelected = new EventEmitter<Recipe>();
  @Output() newRecipeRequested = new EventEmitter<void>();  
  @Output() favoriteToggled = new EventEmitter<number>();

  recipes: Recipe[] = [];
  private subscription!: Subscription;

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
    this.subscription = this.recipeService.recipesChanged.subscribe(
      (recipes: Recipe[]) => {
        this.recipes = recipes;
      }
    );
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  onSelect(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }

  onNewRecipe() {
    this.newRecipeRequested.emit();
  }
}
