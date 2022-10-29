import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Cart } from '../shared/model/Cart';
import { CartItem } from '../shared/model/CartItem';
import { Medicines } from '../shared/model/Medicines';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: Cart = this.getCartFromLocalStorage();
  private cartSubject: BehaviorSubject<Cart> = new BehaviorSubject(this.cart);
  constructor() {}

  addToCart(medicine: Medicines): void {
    let cartItem = this.cart.items.find(
      (item) => item.medicines.productId === medicine.productId
    );
    if (cartItem) return;
    this.cart.items.push(new CartItem(medicine));
    this.setCartToLocalStorage();
  }
  removeFromcart(productId: number): void {
    this.cart.items = this.cart.items.filter(
      (item) => item.medicines.productid != productId
    );
    this.setCartToLocalStorage();
  }
  changeQuantity(medicineId: number, quantity: number) {
    let cartItem = this.cart.items.find(
      (item) => item.medicines.productId === medicineId
    );
    if (!cartItem) return;
    cartItem.quantity = quantity;
    cartItem.price = quantity * cartItem.medicines.price;
    this.setCartToLocalStorage();
  }
  clearCart() {
    this.cart = new Cart();
    this.setCartToLocalStorage();
  }
  getCartObservable(): Observable<Cart> {
    return this.cartSubject.asObservable();
  }
  private setCartToLocalStorage(): void {
    this.cart.totalPrice = this.cart.items.reduce(
      (prevSum, currentItem) => prevSum + currentItem.price,
      0
    );
    this.cart.totalCount = this.cart.items.reduce(
      (prevSum, currentItem) => prevSum + currentItem.quantity,
      0
    );
    const cartJson = JSON.stringify(this.cart);
    localStorage.setItem('Cart', cartJson);
    this.cartSubject.next(this.cart);
  }
  private getCartFromLocalStorage(): Cart {
    const cartJson = localStorage.getItem('Cart');
    return cartJson ? JSON.parse(cartJson) : new Cart();
  }
}
