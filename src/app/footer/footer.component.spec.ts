import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;   // Instance of the component
  let fixture: ComponentFixture<FooterComponent>;   // Wrapper for component and DOM
// Setup test environment before each test
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FooterComponent]    // Declare the component under test
    })
    .compileComponents();     // Compile HTML + CSS
    
    fixture = TestBed.createComponent(FooterComponent);  // Create component fixture
    component = fixture.componentInstance;   // Access component instance
    fixture.detectChanges();  // Trigger ngOnInit and render the view
  });
  // Basic test: verify component instantiation
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
