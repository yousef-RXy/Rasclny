import { Component, OnInit, Input } from '@angular/core';
import { CartItem } from 'src/app/types/dataType';
import { products } from 'src/app/types/dataType';
@Component({
  selector: 'app-left-request',
  templateUrl: './left-request.component.html',
  styleUrls: ['./left-request.component.css'],
})
export class LeftRequestComponent implements OnInit {
  RemovedProduct:any[]=[];
  @Input() CartItem: CartItem;
  ngOnInit(): void {
    console.log(this.CartItem);
  }
  RemoveItem(event: MouseEvent,id:any){
    event.stopPropagation();
    this.RemovedProduct.push(id)
    console.log(this.RemovedProduct)

  }
}
