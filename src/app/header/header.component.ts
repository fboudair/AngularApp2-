import { Component } from '@angular/core'; // Import the Component decorator from Angular core
// Define the component metadata
@Component({
  selector: 'app-header',  // The HTML tag used to include this component: <app-header></app-header>
  templateUrl: './header.component.html'  // The external HTML file containing the component’s view
})
export class HeaderComponent {}
// Currently, this component has no logic or properties.
  // You can add methods or variables here to control header behavior (e.g., dropdown toggle, login state, etc.)