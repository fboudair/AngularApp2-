import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { CartService } from '../../../cart.service';
import { DetectiveService } from '../../../detective.service';  

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe!: Recipe;
  @Input() index!: number;                   
  @Output() recipeClicked = new EventEmitter<Recipe>();
  @Output() favoriteToggled = new EventEmitter<number>();

  quantity: number = 1;  

  constructor(private cartService: CartService,  @Inject(DetectiveService) private detective: DetectiveService
) {}

  ngOnInit() { }

  onClick() {
    this.recipeClicked.emit(this.recipe);
  }

  onAddToCart(event: Event) {
      this.detective.logAction('Add to Cart clicked', { recipeName: this.recipe.name, quantity: this.quantity });

    event.stopPropagation();
    if (this.quantity < 1) {
      this.quantity = 1;  
    }
    this.cartService.addToCart(this.recipe, this.quantity);
  }

  onToggleFavorite(event: Event) {
    event.stopPropagation(); 
    this.favoriteToggled.emit(this.index);
  }
}
