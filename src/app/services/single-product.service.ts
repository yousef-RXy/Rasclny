import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SingleProductService {
  private apiUrl = 'https://depi-backend.vercel.app/product/';
  constructor(private http: HttpClient) { }
  id:any
  getData(_id: any): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}${_id}`);
    
  }
}
