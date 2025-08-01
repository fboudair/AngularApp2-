import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodNewsComponent } from './food-news.component';
// Define a test suite for the FoodNewsComponent
describe('FoodNewsComponent', () => {
  let component: FoodNewsComponent;
  // Define a test suite for the FoodNewsComponent
  let fixture: ComponentFixture<FoodNewsComponent>;
  // Runs before each individual test
  beforeEach(async () => {
        // Configure a testing module that declares the component under test
    await TestBed.configureTestingModule({
      declarations: [FoodNewsComponent]
    })
        // Compile component templates and styles (async because of template/style URLs)
    .compileComponents();
        // Create a test instance (fixture) of the component
    fixture = TestBed.createComponent(FoodNewsComponent);
        // Get the actual component instance from the fixture
    component = fixture.componentInstance;
        // Trigger Angular's change detection so bindings and lifecycle hooks run (e.g., ngOnInit)
    fixture.detectChanges();
  });
  // Basic sanity test: verifies that the component is created successfully
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
