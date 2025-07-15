import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => { // Start a test suite for the AppComponent
  beforeEach(() => { // Before each test, configure a testing module that declares AppComponent
    TestBed.configureTestingModule({
      declarations: [
        AppComponent // Declare the component under test
      ],
    });
    TestBed.compileComponents();  // Compile the component templates and CSS
  });

  it('should create the app', async(() => { // Test 1: Check if the component is created successfully
    const fixture = TestBed.createComponent(AppComponent); // Create a test instance
    const app = fixture.debugElement.componentInstance; // Access the component instance
    expect(app).toBeTruthy();   // Assert it exists (truthy = not null or undefined)
  }));
 // Test 2: Check if the component has a specific title value
  it(`should have as title 'app works!'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app works!');  // Assert that the 'title' property is equal to 'app works!'
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges(); // Trigger change detection and rendering
    const compiled = fixture.debugElement.nativeElement;  // Access the DOM element
    expect(compiled.querySelector('h1').textContent).toContain('app works!');
  }));
});
