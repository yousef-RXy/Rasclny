import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { products } from '../types/dataType';

@Injectable({
  providedIn: 'root',
})
export class GlobalStateService {
  private _state: BehaviorSubject<products[]> = new BehaviorSubject<products[]>(
    []
  );

  public readonly state$: Observable<products[]> = this._state.asObservable();

  public addToCart(product: products): void {
    const currentCart = this._state.getValue();
    const updatedCart = [...currentCart, product];
    this._state.next(updatedCart);
  }

  public getState(): products[] {
    return this._state.getValue();
  }
}
