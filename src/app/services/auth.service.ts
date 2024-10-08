import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

import { authRes } from '../types/userType';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private url = 'https://depi-backend.vercel.app/';

  constructor(private http: HttpClient, private router: Router) {
    this.checkToken();
    window.addEventListener('storage', () => this.checkToken());
  }

  auth(mode: String, data: any) {
    return this.http.post<authRes>(`${this.url}auth/${mode}`, data);
  }

  checkToken() {
    const token = localStorage.getItem('token');
    if (!token) {
      this.router.navigate(['/auth']);
    }
  }
}
