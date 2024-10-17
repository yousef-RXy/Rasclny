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
  }
}
