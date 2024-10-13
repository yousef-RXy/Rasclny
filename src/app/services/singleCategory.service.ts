import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class singleCategoryService {
  private product: any;
  private apiUrl = 'https://depi-backend.vercel.app/category/';

  constructor(private http: HttpClient) { }
 id:any
  getData(_id: any): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}${_id}`);
    
  }

  setData(product: any): void {
    this.product = product;
    console.log( product)
  }

  getProduct(): any {
    return this.product;
  }
}
