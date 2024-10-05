import { Component,OnInit } from '@angular/core';
import { CategoryDataService } from '../../category-data.service';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  constructor(private categoryService:CategoryDataService) { }
  categories?: any
  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(data => {
      this.categories = data.categories;
      console.log(this.categories)
    });
  }
}
