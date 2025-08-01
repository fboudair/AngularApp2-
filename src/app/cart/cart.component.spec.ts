import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartComponent } from './cart.component';

describe('CartComponent', () => {
  let component: CartComponent;   // Instance of the component
  let fixture: ComponentFixture<CartComponent>;    // Wrapper for component and template
 // Setup before each test
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CartComponent]  // Declare the component to test
    })
    // You can also add providers or imports if needed (e.g., mock services)
    .compileComponents();
     // Compile HTML + CSS templates
    fixture = TestBed.createComponent(CartComponent); // Create component fixture
    component = fixture.componentInstance;  // Get component instance
    fixture.detectChanges();  // Trigger ngOnInit and template rendering
  });
 // Basic test: make sure the component is created successfully
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
