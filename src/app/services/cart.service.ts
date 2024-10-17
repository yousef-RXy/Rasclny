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
      return;
    }
    updatedCart.set(product._id, { product, totalAmount: 1 });
    this._state.next(updatedCart);
  }

  public getState(): CartItem[] {
    return Array.from(this._state.getValue().values());
  }
}
