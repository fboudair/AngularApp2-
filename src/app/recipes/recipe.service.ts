import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  // Emits whenever the recipe list changes (useful for components to stay in sync)
  recipesChanged = new Subject<Recipe[]>();
  // Internal list of recipes (pre-filled with 5 recipes)
  private recipes: Recipe[] = [
    new Recipe(1,
      'Chicken Curry',
      'A warm, aromatic classic chicken curry.',
      'assets/images/chicken-curry-recipe.jpg',
      [
        { name: 'Chicken (bone-in or boneless)', amount: 500 },
        { name: 'Oil or ghee (tbsp)', amount: 2 },
        { name: 'Onion (large, finely chopped)', amount: 1 },
        { name: 'Tomatoes (chopped or pureed)', amount: 2 },
        { name: 'Ginger-garlic paste (tbsp)', amount: 1 },
        { name: 'Water (cup)', amount: 1 },
        { name: 'Salt (to taste)', amount: 1 },
        { name: 'Fresh cilantro (garnish)', amount: 1 },
        { name: 'Cumin seeds (tsp)', amount: 1 },
        { name: 'Bay leaf (optional)', amount: 1 },
        { name: 'Turmeric powder (tsp)', amount: 0.5 },
        { name: 'Red chili powder (adjust to taste, tsp)', amount: 1 },
        { name: 'Coriander powder (tsp)', amount: 1 },
        { name: 'Garam masala (tsp)', amount: 1 },
        { name: 'Black pepper (optional, tsp)', amount: 0.5 }
      ],
      19.99
    ),
    new Recipe(2,
      'Indian Lamb Curry',
      'Indian Lamb Curry is a rich, flavorful dish where tender lamb is slowly cooked in a blend of warming spices, tomatoes, onions, and aromatics. It\'s hearty, deeply spiced, and perfect for a comforting meal with rice or Indian breads.',
      'assets/images/Indian-Lamb-Curry.jpeg',
      [
        { name: 'Lamb (chunks)', amount: 500 },
        { name: 'Oil or Ghee (tbsp)', amount: 3 },
        { name: 'Onions (medium, chopped)', amount: 2 },
        { name: 'Tomatoes (chopped or pureed)', amount: 2 },
        { name: 'Ginger-Garlic Paste (tbsp)', amount: 1 },
        { name: 'Water (cups)', amount: 1 },
        { name: 'Salt', amount: 1 },
        { name: 'Fresh Cilantro (garnish)', amount: 1 },
        { name: 'Cumin Seeds (tsp)', amount: 1 },
        { name: 'Bay Leaves', amount: 2 },
        { name: 'Cloves (whole)', amount: 4 },
        { name: 'Green Cardamoms', amount: 3 },
        { name: 'Cinnamon Stick (small)', amount: 1 },
        { name: 'Turmeric Powder (tsp)', amount: 0.5 },
        { name: 'Red Chili Powder (tsp)', amount: 1 },
        { name: 'Coriander Powder (tsp)', amount: 2 },
        { name: 'Cumin Powder (tsp)', amount: 1 },
        { name: 'Ground Black Pepper (tsp)', amount: 0.5 },
        { name: 'Garam Masala (tsp)', amount: 1 }
      ],29.99
    ),
    new Recipe(3,
      'Pot Shrimps in Coconut Sauce',
      'This tropical-inspired dish features juicy shrimp simmered in a creamy coconut milk sauce, enriched with garlic, ginger, and warming spices. Perfect with rice, it\'s both comforting and elegant — a quick seafood curry with big flavor.',
      'assets/images/PotShrimps.jpg',
      [
        { name: 'Shrimp or Prawns (peeled & deveined)', amount: 500 },
        { name: 'Oil (coconut or vegetable) (tbsp)', amount: 2 },
        { name: 'Onion (small, chopped)', amount: 1 },
        { name: 'Garlic Cloves (minced)', amount: 2 },
        { name: 'Fresh Ginger (tsp, grated)', amount: 1 },
        { name: 'Green Chili (optional, sliced)', amount: 1 },
        { name: 'Coconut Milk (cup)', amount: 1 },
        { name: 'Tomato (small, chopped)', amount: 1 },
        { name: 'Salt', amount: 1 },
        { name: 'Lime (juice of half)', amount: 1 },
        { name: 'Fresh Cilantro (garnish)', amount: 1 },
        { name: 'Turmeric Powder (tsp)', amount: 0.5 },
        { name: 'Red Chili Powder or Paprika (tsp)', amount: 0.5 },
        { name: 'Cumin Powder (tsp)', amount: 0.5 },
        { name: 'Coriander Powder (tsp)', amount: 0.5 },
        { name: 'Black Pepper (pinch)', amount: 1 }
      ],
    15.99
    ),
    new Recipe(4,
      'Lamb with Pappardelle Pasta',
      'This luxurious pasta dish features melt-in-your-mouth lamb braised in a rich tomato and red wine sauce, tossed with wide ribbons of pappardelle pasta. A hearty and elegant meal, perfect for special dinners or cozy Sundays.',
      'assets/images/Lamb-with-Pasta.jpg',
      [
        { name: 'Lamb shoulder or leg (chunks)', amount: 500 },
        { name: 'Olive Oil (tbsp)', amount: 2 },
        { name: 'Onion (finely chopped)', amount: 1 },
        { name: 'Garlic Cloves (minced)', amount: 2 },
        { name: 'Carrot (finely diced)', amount: 1 },
        { name: 'Celery Stalk (finely diced)', amount: 1 },
        { name: 'Crushed Tomatoes or Passata (cups)', amount: 1 },
        { name: 'Red Wine (cups)', amount: 0.5 },
        { name: 'Beef or Vegetable Broth (cups)', amount: 0.5 },
        { name: 'Tomato Paste (tbsp)', amount: 1 },
        { name: 'Rosemary (tsp)', amount: 1 },
        { name: 'Thyme (tsp)', amount: 1 },
        { name: 'Salt', amount: 1 },
        { name: 'Black Pepper', amount: 1 },
        { name: 'Fresh Parsley (for garnish)', amount: 1 },
        { name: 'Grated Parmesan or Pecorino (for serving)', amount: 1 },
        { name: 'Pappardelle Pasta (g)', amount: 300 },
        { name: 'Salt for boiling water', amount: 1 }
      ],
    24.99
    ),
    new Recipe(5,
      'The Best Classic Strawberry Shortcake',
      'A golden, tender shortcake biscuit layered with juicy macerated strawberries and freshly whipped cream. This traditional American dessert is sweet, buttery, light, and beautifully balanced — the ultimate celebration of fresh strawberries.',
      'assets/images/shortcake.jpg',
      [
        { name: 'Fresh Strawberries (hulled & sliced)', amount: 450 },
        { name: 'Granulated Sugar (for strawberries, cup)', amount: 0.25 },
        { name: 'Lemon Juice (tsp)', amount: 1 },
        { name: 'All-Purpose Flour (cups)', amount: 2 },
        { name: 'Baking Powder (tbsp)', amount: 1 },
        { name: 'Baking Soda (tsp)', amount: 0.25 },
        { name: 'Salt (tsp)', amount: 0.5 },
        { name: 'Granulated Sugar (tbsp)', amount: 3 },
        { name: 'Cold Unsalted Butter (stick)', amount: 0.5 },
        { name: 'Buttermilk (or milk + lemon juice) (cups)', amount: 0.75 },
        { name: 'Heavy Whipping Cream (cups)', amount: 1 },
        { name: 'Powdered Sugar (tbsp)', amount: 2 },
        { name: 'Vanilla Extract (tsp)', amount: 0.5 }
      ],
    6.99
    )
  ];
  // Returns a shallow copy of the recipe list (to avoid direct mutation)
  getRecipes() {
    return this.recipes.slice();
  }
  // Returns a single recipe by index
  getRecipe(index: number) {
    return this.recipes[index];
  }
  // Adds a new recipe to the list and notifies subscribers
  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.getRecipes()); // Emit updated list
  }
  // Updates a recipe at a given index and notifies subscribers
  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.getRecipes());  // Emit updated list
  }
  // Deletes a recipe at the given index and notifies subscribers
  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.getRecipes());// Emit updated list
  }
  toggleFavorite(index: number) {  // Toggles the "isFavorite" property of a recipe
    this.recipes[index].isFavorite = !this.recipes[index].isFavorite;
    this.recipesChanged.next(this.getRecipes());  // Emit updated list
  }
  
  // Sets the entire list of recipes (used for loading from backend)
  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.getRecipes());
  }
}
