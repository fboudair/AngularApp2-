import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchComponent } from './search.component';
// Describe the test suite for the SearchComponent
describe('SearchComponent', () => {
  let component: SearchComponent;   // Instance of the component
  let fixture: ComponentFixture<SearchComponent>;    // Test fixture that wraps the component 
// This runs before each test in the suite
  beforeEach(async () => {
     // Configure a testing module that declares the component
    await TestBed.configureTestingModule({
      declarations: [SearchComponent]
    })
    .compileComponents();  // Compiles the component's template and styles
    // Create the component and get its instance
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();  // Trigger initial change detection to apply bindings
  });
 // A simple test to verify that the component is created successfully
  it('should create', () => {
    expect(component).toBeTruthy();   // Expect the componen
  });
});
