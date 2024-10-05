import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data-service.service';
import { productData } from '../../dataType';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  category: string | null = ''; 
  products?: productData[]; 
  filteredProducts?: productData[]; 

  
  constructor(private dataService: DataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.category = this.route.snapshot.paramMap.get('category');
    console.log('Category from URL:', this.category);
    this.dataService.getProducts().subscribe(data => {
      this.products = data.products;
  
      if(this.category){
        this.filteredProducts = this.products?.filter(product =>product.category === this.category)
        console.log(this.filteredProducts);
      }
    });
  }
  
}
