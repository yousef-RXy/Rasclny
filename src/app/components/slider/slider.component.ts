import { Component, AfterViewInit, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent  implements OnInit {
  data?: any;
  isLoading: boolean;
  url:any;
  constructor(private apiService: ApiService) {}
  ngOnInit(): void {
    this.isLoading = true;
    this.apiService.getData().subscribe(response => {
      this.data = response;
      this.isLoading = false;
      console.log(this.data)
    });
  }
}
