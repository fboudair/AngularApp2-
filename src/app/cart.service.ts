import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ // Makes this service globally available throughout the app
  providedIn: 'root'
})
export class CartService {
   // Internal array to hold cart items with their quantities
  private items: { item: any; quantity: number }[] = [];
// BehaviorSubject to emit changes in the cart items to any subscribers
  private cartItemsSubject = new BehaviorSubject<{ item: any; quantity: number }[]>([]);
  cartItemsChanged = this.cartItemsSubject.asObservable(); // Observable exposed to components for reactive updates
/**
   * Adds an item to the cart.
   * If the item already exists, it increases the quantity.
   * Otherwise, it adds the new item with the specified quantity.
   */
 addToCart(item: any, quantity: number = 1) {
  const existingItem = this.items.find(cartEntry => cartEntry.item.name === item.name);

  if (existingItem) {
    existingItem.quantity += quantity; // Increment quantity if item exists
  } else {
    this.items.push({ item, quantity }); // Add new item to the cart
  }

  this.cartItemsSubject.next([...this.items]);  // Emit updated cart
}

/**
   * Returns the current items in the cart.
   */
  getItems() {
    return this.items;
  }
/**
   * Clears the cart and emits the change.
   */
  clearCart() {
    this.items = [];
    this.cartItemsSubject.next([...this.items]);  
  }
 /**
   * Removes one quantity of the item at the given index.
   * If quantity becomes 0, the item is fully removed from the cart.
   */
 removeItem(index: number) {
  const item = this.items[index];

  if (item.quantity > 1) {
    item.quantity -= 1;  // Decrease quantity
  } else {
    this.items.splice(index, 1);  // Remove item completely
  }

  this.cartItemsSubject.next([...this.items]);  // Emit updated cart
}

 /**
   * Calculates and returns the total price of all items in the cart.
   */
  getTotalPrice() {
    return this.items.reduce(
      (sum, cartItem) => sum + ((cartItem.item.price || 0) * cartItem.quantity),
      0
    );
  }
}
