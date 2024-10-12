import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { productData } from '../types/dataType';

@Injectable({
  providedIn: 'root',
})
export class CategoryDataService {
  private jsonUrl = 'assets/category.json';
  constructor(private http: HttpClient) {}
  getCategories(): Observable<any> {
    return this.http.get<[any]>(this.jsonUrl);
  }
}
