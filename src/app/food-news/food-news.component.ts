import { Component } from '@angular/core';

@Component({
    // The custom HTML tag you’ll use to place this component in templates
  selector: 'app-food-news',
    // Path to the external HTML template for this component’s view
  templateUrl: './food-news.component.html',
  // NOTE: must be "styleUrls" (plural)
    // Array of CSS files applied only to this component (scoped styles)
  styleUrl: './food-news.component.css'
})
export class FoodNewsComponent {
  // Component class is currently empty.
  // Add properties (e.g., articles list) and methods (e.g., loadNews()) here when needed
}


