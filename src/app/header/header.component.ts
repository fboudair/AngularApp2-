import { Component, OnInit, OnDestroy } from '@angular/core';
import { CartService } from '../cart.service';  // Service managing cart state
import { Subscription } from 'rxjs';     // To handle subscription lifecycle
import { DataStorageService } from '../shared/data-storage-service'; // Service for Firebase connection
import { RecipeService } from '../recipes/recipe.service'; // Recipe data service

@Component({
  selector: 'app-header',    // Component selector used in templates
  templateUrl: './header.component.html',  // Path to HTML template
  styleUrls: ['./header.css']           // Path(s) to CSS stylesheet(s)
})  
export class HeaderComponent implements OnInit, OnDestroy {
  cartCount: number = 0;    
  private cartSub!: Subscription;  

  constructor(
    private cartService: CartService,
    private dataStorageService: DataStorageService,
    private recipeService: RecipeService
  ) {}

  ngOnInit(): void {
    this.cartSub = this.cartService.cartItemsChanged.subscribe(items => {
      this.cartCount = items.reduce((sum, cartItem) => sum + cartItem.quantity, 0);
    });
  }

  ngOnDestroy(): void {
    if (this.cartSub) {
      this.cartSub.unsubscribe();
    }
  }

  onSaveData() {
    const recipes = this.recipeService.getRecipes();
    this.dataStorageService.storeRecipes(recipes).subscribe(response => {
      console.log('Recipes saved!', response);
    });
  }

  onFetchData() {
    this.dataStorageService.fetchRecipes().subscribe(recipes => {
      this.recipeService.setRecipes(recipes);
    });
  }
}
