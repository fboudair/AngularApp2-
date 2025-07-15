import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
// Decorator to define metadata for the component
@Component({
  selector: 'app-shopping-edit',   // Custom HTML tag for this component
  templateUrl: './shopping-edit.component.html'  // Path to the component's template
})
export class ShoppingEditComponent {
  @Input() selectedIndex: number | null = null; // Input: Index of the currently selected ingredient (used by parent)

  @Output() ingredientAdded = new EventEmitter<Ingredient>();    // Output: Emits a new Ingredient object when user adds an item
  @Output() deleteSelected = new EventEmitter<void>();   // Output: Emits a signal to delete the selected item
// Two-way data-bound form fields (used in the template)
  nameInput: string = '';   // Holds the name entered by the user
  amountInput: number | null = null;  // Holds the amount entered by the user
// Called when the user clicks "Add"
  onAddItem() {
    const newIngredient = new Ingredient(this.nameInput, this.amountInput!);  // Create a new Ingredient instance using form input
    this.ingredientAdded.emit(newIngredient); // Emit the new ingredient to the parent component
    this.onClearForm();  // Clear the form fields
  }
 // Called when the user clicks "Delete"
  onDeleteItem() { // Only emit delete event if an item is selected
    if (this.selectedIndex !== null) {
      this.deleteSelected.emit();
    } else {
      alert('Please select an ingredient to delete');  // Alert user if nothing is selected
    }
  }

  onClearForm() {  // Clears the input form
    this.nameInput = '';
    this.amountInput = null;
  }
}
