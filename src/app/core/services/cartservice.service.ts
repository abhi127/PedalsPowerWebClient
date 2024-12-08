import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartserviceService {
  private storageKey = 'cart';

  constructor() {}

  /**
   * Get all items in the cart
   * @returns Array of cart items
   */
  getCartItems(): any[] {
    const cart = localStorage.getItem(this.storageKey);
    return cart ? JSON.parse(cart) : [];
  }

  /**
   * Add a product to the cart
   * @param product Product object to add
   */
  addToCart(product: any): void {
    const cart = this.getCartItems();
    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      // If the product already exists in the cart, increase its quantity
      existingProduct.quantity += product.quantity;
    } else {
      // Otherwise, add the new product
      cart.push(product);
    }

    this.saveCart(cart);
  }

  /**
   * Update the quantity of a product in the cart
   * @param productId ID of the product to update
   * @param quantity New quantity
   */
  updateCartItem(productId: number, quantity: number): void {
    const cart = this.getCartItems();
    const product = cart.find((item) => item.id === productId);

    if (product) {
      product.quantity = quantity;

      // Remove the product if quantity is zero or less
      if (product.quantity <= 0) {
        this.removeFromCart(productId);
      } else {
        this.saveCart(cart);
      }
    }
  }

  /**
   * Remove a product from the cart
   * @param productId ID of the product to remove
   */
  removeFromCart(productId: number): void {
    const cart = this.getCartItems();
    const updatedCart = cart.filter((item) => item.id !== productId);

    this.saveCart(updatedCart);
  }

  /**
   * Clear all items from the cart
   */
  clearCart(): void {
    localStorage.removeItem(this.storageKey);
  }

  /**
   * Save the cart to localStorage
   * @param cart Array of cart items
   */
  private saveCart(cart: any[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(cart));
  }
}
