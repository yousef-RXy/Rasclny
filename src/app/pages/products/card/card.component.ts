<<<<<<< HEAD
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  cartProducts: any[] = [];
  @Input() singleCategory?: any;
  @Output() cartProductsChange = new EventEmitter<any[]>();

  ngOnInit(): void {}

  cartProduct(ProductId: number) {
    this.cartProducts.push(ProductId);
    this.cartProductsChange.emit(this.cartProducts);  // Notify parent component
    console.log(this.cartProducts);
=======
import { Component, Input, OnInit } from '@angular/core';
import { CartService } from '../../../services/cart.service';
import { products } from 'src/app/types/dataType';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() singleCategory?: any;
  constructor(private cart: CartService) {}
  ngOnInit(): void {}
  onButtonClick(event: MouseEvent, product: products): void {
    event.stopPropagation();
    this.cart.addToCart(product);
    console.log(this.cart.getState());
>>>>>>> main
  }
}
