import { Component } from '@angular/core';
// Using the @Component decorator to define metadata for this component
@Component({
  selector: 'app-root', // The custom HTML tag used to embed this component in index.html
  templateUrl: './app.component.html', // Path to the HTML template for this component
  styleUrls: ['./app.component.css'] // Path(s) to CSS styles specific to this component
})
export class AppComponent {} // Defining the component class
  // This is the root component class of the application.
  // You can define properties and methods here to be used in the template.