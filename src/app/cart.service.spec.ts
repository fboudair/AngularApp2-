import { TestBed } from '@angular/core/testing';

import { CartService } from './cart.service';
// Describe block defines the test suite for CartService
describe('CartService', () => {
  let service: CartService;   // Variable to hold the service instance
// beforeEach runs before each test case to set up the testing environment
  beforeEach(() => {
    TestBed.configureTestingModule({});   // Initialize the testing module
    service = TestBed.inject(CartService);   // Inject the CartService instance
  });
 // Basic test to verify the service was created successfully
  it('should be created', () => {
    expect(service).toBeTruthy();  // Assert that the service instance exists
  });
});
