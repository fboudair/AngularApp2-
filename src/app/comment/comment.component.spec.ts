import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentComponent } from './comment.component';
// Define the test suite
describe('CommentComponent', () => {
  let component: CommentComponent;  // Component instance
  let fixture: ComponentFixture<CommentComponent>;  // Test fixture to access component and DOM
// Setup the testing environment before each test
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CommentComponent]   // Declare the component to be tested
    })
    .compileComponents();  // Compile the component template and styles
     // Create the component and get its instance
    fixture = TestBed.createComponent(CommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // Trigger Angular's change detection to initialize the component
  });
// Simple test to confirm the component is created successfully
  it('should create', () => {
    expect(component).toBeTruthy();  // Expect the component instance to be defined (truthy)
  });
});
