import { Component, OnInit } from '@angular/core';
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

  constructor(
    private singleCategoryData: singleCategoryService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.url.subscribe(url => {
      console.log(url[1].path);
      this.category = url[1].path;
      this.singleCategoryData.getData(this.category).subscribe(response => {
        this.singleCategory = response;

        console.log(this.singleCategory?.category.products);
      });
    
    this.route.paramMap.subscribe((params) => {
      this.category = params.get('category');
      console.log('Category from URL:', this.category);

      if (this.category) {
        this.singleCategoryData.getData(this.category).subscribe(response => {
          this.singleCategory = response;
          console.log(this.singleCategory?.category?.products);
        });
      }
    });
  }
}
