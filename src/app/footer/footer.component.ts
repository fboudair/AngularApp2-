import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',  // Selector used in templates (e.g., <app-footer>)
  templateUrl: './footer.component.html', // Path to the HTML template
  styleUrl: './footer.component.css'  // Correct property name (must be an array)
})
export class FooterComponent {
// Footer logic (if any) goes here — currently it's static
}
