import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RecipesComponent } from './recipes/recipes.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component'; 
// Define the application routes
const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  { path: 'recipes', component: RecipesComponent },  // Route for viewing the main recipes page
  { path: 'recipes/new', component: RecipeEditComponent },  // Route for creating a new recipe
  { path: 'shopping-list', component: ShoppingListComponent }  // Route for accessing the shopping list
];
// Decorator that turns this class into a routing module
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)], // Configure the router at the application's root level with the defined routes
  exports: [RouterModule] // Make RouterModule (with routes) available to other modules
})
export class AppRoutingModule {}
