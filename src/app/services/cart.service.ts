import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { products, CartItem } from '../types/dataType';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private _state: BehaviorSubject<Map<string, CartItem>> = new BehaviorSubject<
    Map<string, CartItem>
  >(new Map());

  // Expose the state as an Observable
  public readonly state$: Observable<Map<string, CartItem>> =
    this._state.asObservable();

  public addToCart(product: products): void {
    const currentCart = this._state.getValue();
    const updatedCart = new Map(currentCart);
    const item = updatedCart.get(product._id);
    if (item) {
      updatedCart.set(product._id, {
        product,
        totalAmount: item.totalAmount + 1,
      });
      this._state.next(updatedCart);
      const cartObj = Object.fromEntries(updatedCart.entries());
      localStorage.setItem('cart', JSON.stringify(cartObj));
      return;
    }
    updatedCart.set(product._id, { product, totalAmount: 1 });

    const cartObj = Object.fromEntries(updatedCart.entries());
    localStorage.setItem('cart', JSON.stringify(cartObj));
    this._state.next(updatedCart);
  }

  public removeFromCart(product: products) {
    const currentCart = this._state.getValue();
    const updatedCart = new Map(currentCart);
    updatedCart.delete(product._id);
    const cartObj = Object.fromEntries(updatedCart.entries());
    localStorage.setItem('cart', JSON.stringify(cartObj));
    this._state.next(updatedCart);
  }

  public increaseItem(product: products): void {
    const currentCart = this._state.getValue();
    const updatedCart = new Map(currentCart);
    const item = updatedCart.get(product._id);
    if (item) {
      updatedCart.set(product._id, {
        product,
        totalAmount: item.totalAmount + 1,
      });
      this._state.next(updatedCart);
      const cartObj = Object.fromEntries(updatedCart.entries());
      localStorage.setItem('cart', JSON.stringify(cartObj));
    }
  }

  public decreaseItem(product: products): void {
    const currentCart = this._state.getValue();
    const updatedCart = new Map(currentCart);
    const item = updatedCart.get(product._id);
    if (!item) return;
    if (item.totalAmount === 1) {
      this.removeFromCart(product);
      return;
    }

    updatedCart.set(product._id, {
      product,
      totalAmount: item.totalAmount - 1,
    });
    this._state.next(updatedCart);
    const cartObj = Object.fromEntries(updatedCart.entries());
    localStorage.setItem('cart', JSON.stringify(cartObj));
  }

  public setState(): void {
    const localStorageCart = localStorage.getItem('cart');
    if (localStorageCart) {
      const cart = JSON.parse(localStorageCart);
      const cartMap = new Map(Object.entries(cart)) as Map<string, CartItem>;
      this._state.next(cartMap);
    }
  }

  public getState(): CartItem[] {
    return Array.from(this._state.getValue().values());
  }

  public removeCart(): CartItem[] {
    const currentCart = this._state.getValue().values();
    this._state.next(new Map());
    localStorage.removeItem('cart');
    return Array.from(currentCart);
  }
}
