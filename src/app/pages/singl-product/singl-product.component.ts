import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';  // Import ActivatedRoute
import { SingleProductService } from '../../services/single-product.service';

@Component({
  selector: 'app-singl-product',
  templateUrl: './singl-product.component.html',
  styleUrls: ['./singl-product.component.css']
})
export class SinglProductComponent implements OnInit {
  product: any | null = '';  // Use null as initial value instead of an empty string
  singleProductData: any;

  constructor(
    private route: ActivatedRoute, 
    private singleProductService: SingleProductService
  ) {}

  ngOnInit(): void {
    this.product = this.route.snapshot.paramMap.get('productId');  // Get productId from route params
    console.log('Product from URL:', this.product);

    if (this.product) {
      this.singleProductService.getData(this.product).subscribe(response => {
        this.singleProductData = response;
        console.log('Product data:', this.singleProductData);
      });
    }
  }
}
