import { Component, OnInit, OnDestroy } from '@angular/core';
import { CartService } from '../cart.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cart',   // Selector used in HTML templates
  templateUrl: './cart.component.html',  // Associated HTML file
  styleUrls: ['./cart.component.css']  // Associated CSS file
})
export class CartComponent implements OnInit, OnDestroy {
  // Array of items currently in the cart
  items: { item: any; quantity: number }[] = [];
  private cartSub!: Subscription;   // Subscription to cart changes

  constructor(private cartService: CartService) {}   // Inject the CartService for managing and accessing cart data
 /**
   * Lifecycle hook: Called once the component is initialized
   * - Fetches current cart items
   * - Subscribes to cart changes to update view reactively
   */
  ngOnInit() {
    this.items = this.cartService.getItems();  // Get initial items
    this.cartSub = this.cartService.cartItemsChanged.subscribe(items => {
      this.items = items;// Update items when cart changes
    });
  }
/**
   * Lifecycle hook: Called when the component is destroyed
   * - Unsubscribes from the cart observable to prevent memory leaks
   */
  ngOnDestroy() {
    if (this.cartSub) {
      this.cartSub.unsubscribe();
    }
  }
/**
   * Gets the total price of all items in the cart
   */
  getTotal() {
    return this.cartService.getTotalPrice();
  }
  /**
   * Removes a single quantity of the item at the given index
   * - If quantity becomes 0, the item is removed entirely
   */
  removeItem(index: number) {
    this.cartService.removeItem(index);
  }
 /**
   * Clears all items from the cart
   */
  clearCart() {
    this.cartService.clearCart();
  }
  
}
