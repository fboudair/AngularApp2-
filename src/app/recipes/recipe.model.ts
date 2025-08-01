import { Ingredient } from '../shared/ingredient.model';
// Definition of the Recipe class used to represent a recipe item
export class Recipe {
    public id: number; 
  public name: string;  // Name of the recipe
  public description: string;  // Short description of the recipe
  public imagePath: string;  // URL or path to an image representing the recipe
  public ingredients: Ingredient[]; // Array of ingredients used in the recipe
  public price: number;               // Price of the recipe item
  public isFavorite: boolean;   // Whether this recipe is marked as favorite
// Constructor to initialize all properties of the Recipe object
  constructor(
      id: number, 
    name: string,  // Name of the recipe
    description: string, // Description of the recipe
    imagePath: string,  // Image path for the recipe
    ingredients: Ingredient[] = [],  // Default to an empty ingredients list if not provided
    price: number = 0,               // Default price is 0
    isFavorite: boolean = false   // Default favorite status is false
  ) {
    this.id=id;
    this.name = name;
    this.description = description;
    this.imagePath = imagePath;
    this.ingredients = ingredients;
    this.price = price;              
    this.isFavorite = isFavorite;
  }
}
