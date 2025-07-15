import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeEditComponent } from './recipe-edit.component';
// Describe a test suite for the RecipeEditComponent
describe('RecipeEditComponent', () => {
  let component: RecipeEditComponent; // This will hold the instance of the component
  let fixture: ComponentFixture<RecipeEditComponent>; // This holds the component along with its template and debugging tools
 // This block runs before each test
  beforeEach(async () => {
    await TestBed.configureTestingModule({ // Configure the testing module with declarations (components, pipes, etc.)
      declarations: [RecipeEditComponent]
    })
    .compileComponents(); // Compile the component's template and CSS
    
    fixture = TestBed.createComponent(RecipeEditComponent);  // Create an instance of the component
    component = fixture.componentInstance;
    fixture.detectChanges();     // Trigger initial data binding and lifecycle hooks (e.g., ngOnInit)
  });
  // Simple unit test: checks if the component is created successfully
  it('should create', () => {
    expect(component).toBeTruthy(); // Expect the component instance to be truthy (i.e., created)
  });
});
