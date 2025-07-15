import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core'; // Import necessary Angular modules and decorators
import { Recipe } from '../recipe.model'; // Recipe model (name, description, imagePath, ingredients)
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms'; // Reactive form tools

@Component({
  selector: 'app-recipe-detail',  // HTML tag to use this component
  templateUrl: './recipe-detail.component.html', // Path to HTML template
  styleUrls: ['./recipe-detail.component.css'] // Optional CSS file for styling
})
export class RecipeDetailComponent implements OnInit, OnChanges {
  @Input() recipe: Recipe | null = null;  // Input: recipe to display/edit, passed from parent component

  @Output() editRecipe = new EventEmitter<Recipe>();  // Output: event emitted when user saves edits to recipe
  @Output() deleteRecipe = new EventEmitter<void>(); // Output: event emitted when user requests deletion
// UI state
  showDropdown = false; // UI state
  isEditing = false;  // tracks if user is editing

  recipeForm!: FormGroup; // Reactive form object

  constructor() {}
 // Lifecycle hook, runs once when component is initialized
  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['recipe'] && this.recipe) {
      this.isEditing = false;  // Reset editing mode
      this.initForm(); // Initialize form with the recipe's data
    }
  }
  // Toggles the dropdown menu in the UI
  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }
  // Enter editing mode and initialize form
  onEditRecipe() {
    this.isEditing = true;
    this.showDropdown = false;
    this.initForm();
  }
 // Emit delete event to parent
  onDeleteRecipe() {
    this.deleteRecipe.emit();
    this.showDropdown = false;
  }
// Initialize the reactive form with recipe data
  private initForm() {
    if (!this.recipe) return;

    this.recipeForm = new FormGroup({
      name: new FormControl(this.recipe.name, Validators.required),
      imagePath: new FormControl(this.recipe.imagePath, Validators.required),
      description: new FormControl(this.recipe.description, Validators.required),
      ingredients: new FormArray([]) // Will be filled below
    });
// If the recipe has ingredients, add them as FormGroups to the FormArray
    if (this.recipe.ingredients) {
      for (const ingredient of this.recipe.ingredients) {
        (this.recipeForm.get('ingredients') as FormArray).push(
          new FormGroup({
            name: new FormControl(ingredient.name, Validators.required),
            amount: new FormControl(ingredient.amount, [Validators.required, Validators.min(1)])
          })
        );
      }
    }
  }
 // Getter to simplify access to ingredient form controls in the template
  get ingredientsControls() {
    return (this.recipeForm.get('ingredients') as FormArray).controls;
  }
// Add a new empty ingredient field to the form
  onAddIngredient() {
    (this.recipeForm.get('ingredients') as FormArray).push(
      new FormGroup({
        name: new FormControl(null, Validators.required),
        amount: new FormControl(null, [Validators.required, Validators.min(1)])
      })
    );
  }
 // When the user saves their edits, emit the updated recipe to the parent
  onSaveEdit() {
    if (this.recipeForm.invalid) return;

    const updatedRecipe = new Recipe(
      this.recipeForm.value.name,
      this.recipeForm.value.description,
      this.recipeForm.value.imagePath,
      this.recipeForm.value.ingredients
    );

    this.editRecipe.emit(updatedRecipe);
    this.isEditing = false;
  }
 // When the user saves their edits, emit the updated recipe to the parent
  onCancelEdit() {
    this.isEditing = false;
  }
}
