import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-edit',  // The component selector
  templateUrl: './recipe-edit.component.html',  // The HTML template for this component
   styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  recipeForm!: FormGroup;   // Form group for the recipe form

  constructor(
    private route: ActivatedRoute, // Used to access route parameters (if needed)
    private router: Router,  // Used for navigation
    private recipeService: RecipeService // Custom service to handle recipes
  ) {}
// Lifecycle hook: called once the component is initialized
  ngOnInit(): void {
    this.initForm();
  }
  // Initializes the form with empty/default values and validators
  private initForm() {
    this.recipeForm = new FormGroup({
      name: new FormControl(null, Validators.required),  // Required name field
      imagePath: new FormControl(null, Validators.required),  // Required image URL field
      description: new FormControl(null, Validators.required),  // Required description field
      ingredients: new FormArray([])   // FormArray to hold dynamic ingredients
    });
  }
// Getter to access the FormArray controls in the template
  get ingredientsControls() {
    return (this.recipeForm.get('ingredients') as FormArray).controls;
  }
// Adds a new ingredient to the ingredients FormArray
  onAddIngredient() {
    (this.recipeForm.get('ingredients') as FormArray).push(
      new FormGroup({
        name: new FormControl(null, Validators.required),
        amount: new FormControl(null, [Validators.required, Validators.min(1)])
      })
    );
  }
 // Called when the form is submitted
 onSubmit() {
  const newRecipe = new Recipe(
    this.recipeForm.value.name,
    this.recipeForm.value.description,
    this.recipeForm.value.imagePath,
    this.recipeForm.value.ingredients
  );
  this.recipeService.addRecipe(newRecipe);   // Save the recipe using the service
  this.router.navigate(['/recipes']);    // Navigate back to the recipes list
}

 // Called when the cancel button is clicked
  onCancel() {
    this.router.navigate(['/recipes']); // Navigate back without saving
  }
}
