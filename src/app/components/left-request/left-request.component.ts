import { Component, OnInit, Input } from '@angular/core';
import { CartItem } from 'src/app/types/dataType';

@Component({
  selector: 'app-left-request',
  templateUrl: './left-request.component.html',
  styleUrls: ['./left-request.component.css'],
})
export class LeftRequestComponent implements OnInit {
  @Input() CartItem: CartItem;
  ngOnInit(): void {
    console.log(this.CartItem);
  }
}
