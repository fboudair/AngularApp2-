import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Recipe } from '../recipe.model';
import { Subscription } from 'rxjs';
import { RecipeService } from '../recipe.service';
import { DataStorageService } from '../../shared/data-storage-service';

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

  constructor(
    private recipeService: RecipeService,
    private dataStorageService: DataStorageService
  ) {}

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

  onSaveData() {
    const recipes = this.recipeService.getRecipes();
    this.dataStorageService.storeRecipes(recipes).subscribe({
      next: (response) => {
        console.log('Recipes saved!', response);
      },
      error: (error) => {
        console.error('Error saving recipes:', error);
      }
    });
  }

  onFetchData() {
    this.dataStorageService.fetchRecipes().subscribe({
      next: (recipes) => {
        this.recipeService.setRecipes(recipes);
      },
      error: (error) => {
        console.error('Error fetching recipes:', error);
      }
    });
  }
}
