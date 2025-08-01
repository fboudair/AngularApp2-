import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutComponent } from './checkout.component';

describe('CheckoutComponent', () => {
  let component: CheckoutComponent;    // Instance of the component
  let fixture: ComponentFixture<CheckoutComponent>;  // Fixture to access DOM and component
// Setup before each test
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CheckoutComponent] // Declare the component to test
    })
    .compileComponents();   // Compile the component's template and CSS
    
    fixture = TestBed.createComponent(CheckoutComponent);   // Create the component instance
    component = fixture.componentInstance;     // Get direct access to the component
    fixture.detectChanges();        // Trigger initial data binding and ngOnInit
  });
// Basic test to confirm component was created
  it('should create', () => {
    expect(component).toBeTruthy();  // Component should be defined and not null
  });
});
