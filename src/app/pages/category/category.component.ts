import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  data?: any;
  url:any;
  isLoading:boolean;
  constructor(private apiService: ApiService) {}
  ngOnInit(): void {
  this.isLoading=true;

    this.apiService.getData().subscribe(response => {
      this.data = response;
      console.log(this.data)
      this.isLoading=false;
    });
  }
}
