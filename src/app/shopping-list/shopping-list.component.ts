import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list', // HTML tag to use this component
  templateUrl: './shopping-list.component.html', // Path to the component's HTML template
  styleUrls: ['./shopping-list.component.css']  // Path to the component's CSS styles
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [  // Array of ingredients shown in the shopping list
    new Ingredient('Apples', 5),   // Add 5 Apples by default
    new Ingredient('Tomatoes', 10),  // Add 10 Tomatoes by default
  ];
// To track which ingredient is selected (for editing or deleting)
  selectedIngredientIndex: number | null = null;
 // Constructor – usually used to inject services (empty for now)
  constructor() { }
 // Lifecycle hook called once the component is initialized
  ngOnInit() { }
  // Method to handle adding a new ingredient to the list
  onIngredientAdded(newIngredient: Ingredient) {
    this.ingredients.push(newIngredient);  // Add to the array
  }
// Method to mark an ingredient as selected (e.g., on click)
  onSelectIngredient(index: number) {
    this.selectedIngredientIndex = index; // Store selected index
  }
// Method to delete the currently selected ingredient
  onDeleteSelected() {
    if (this.selectedIngredientIndex !== null) {
      this.ingredients.splice(this.selectedIngredientIndex, 1);  // Remove from array
      this.selectedIngredientIndex = null; // Reset selection
    }
  }
}
