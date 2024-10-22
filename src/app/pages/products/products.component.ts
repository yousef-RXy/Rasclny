import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { singleCategoryService } from '../../services/singleCategory.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  category: string | null = '';
  singleCategory: any;
  cartProducts: any[] = [];

  constructor(
    @Inject(singleCategoryService)
    private singleCategoryData: singleCategoryService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.url.subscribe(url => {
      this.category = url[1].path;
      this.loadCategoryData();
    });

    this.route.paramMap.subscribe(params => {
      this.category = params.get('category');
      this.loadCategoryData();
    });
  }

  loadCategoryData(): void {
    if (this.category) {
      this.singleCategoryData
        .getData(this.category)
        .subscribe((response: any) => {
          this.singleCategory = response;
        });
    }
  }

  updateCart(newCartProducts: any[]): void {
    this.cartProducts = newCartProducts;
  }
}
