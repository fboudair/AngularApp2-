import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-checkout',    // Component selector used in HTML templates
  templateUrl: './checkout.component.html'     // Associated template
})
export class CheckoutComponent implements OnInit {
  // Form fields
  name = '';
  address = '';
    // Cart-related data
  cartItems: any[] = [];
  // Tracks if the order has been placed
  orderPlaced = false;
  totalPrice = 0;

  constructor(private cartService: CartService) {}
 /**
   * On component initialization:
   * - Subscribe to the cart observable
   * - Update cart items and compute total price
   */
  ngOnInit(): void {
this.cartService.cartItemsChanged.subscribe(items => {


      this.cartItems = items;
      // Calculate total price dynamically
      this.totalPrice = items.reduce(
        (total, item) => total + item.item.price * item.quantity,
        0
      );
    });
  }
 /**
   * Handles the form submission for placing an order
   * - Prevents default form submission
   * - Marks order as placed
   * - Clears the cart
   */
  placeOrder(event: Event) {
    event.preventDefault();
    this.orderPlaced = true;
    this.cartService.clearCart();  // Clear the cart after placing the order
  }
}
