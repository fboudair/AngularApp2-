import { BrowserModule } from '@angular/platform-browser'; // Required for running the app in the browser. Includes common directives like *ngIf, *ngFor.
import { NgModule } from '@angular/core'; // Angular decorator to define modules.
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  // Forms modules: FormsModule => For template-driven forms (e.g., [(ngModel)]).
import { RouterModule } from '@angular/router';  // Optional direct import (not used directly here, since AppRoutingModule wraps it).
import { AppComponent } from './app.component';  // Root component, bootstrapped when the app starts.
import { HeaderComponent } from './header/header.component'; // Top navigation/header bar of the app.
import { RecipesComponent } from './recipes/recipes.component'; // Recipe Feature Components:  Main container for all recipe-related views.
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component'; // Shows details of a selected recipe.
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component'; // Shows details of a selected recipe.
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component'; // A single recipe in the list.
import { ShoppingListComponent } from './shopping-list/shopping-list.component'; // Form component for adding/editing recipes.
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component'; // Shows the list of shopping ingredients.
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component'; // Form for adding, editing, and deleting shopping list items.
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './footer/footer.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CommentComponent } from './comment/comment.component';
import { SearchComponent } from './search/search.component';  // Custom routing configuration for navigating between views.

import { HttpClientModule } from '@angular/common/http';
import { DataStorageService } from './shared/data-storage-service';
import { FoodNewsComponent } from './food-news/food-news.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    RecipeEditComponent,
    FooterComponent,
    CartComponent,
    CheckoutComponent,
    CommentComponent,
    SearchComponent,
    FoodNewsComponent
  ],
  imports: [ // External modules this module depends on
    BrowserModule,  // Required to run the app in a browser
    FormsModule,   // Enables template-driven forms
    ReactiveFormsModule ,  // Enables reactive (model-driven) forms
    AppRoutingModule,   // Adds routing capabilities
    HttpClientModule
  ],
  providers: [DataStorageService],
  bootstrap: [AppComponent]  // The component to bootstrap when this module is loaded (root component)
})
export class AppModule { }
