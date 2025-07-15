import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Recipe } from '../../recipe.model';

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

  constructor() { }

  ngOnInit() { }

  onClick() {
    this.recipeClicked.emit(this.recipe);
  }

  onToggleFavorite(event: Event) {
    event.stopPropagation(); 
    this.favoriteToggled.emit(this.index);
  }
}
