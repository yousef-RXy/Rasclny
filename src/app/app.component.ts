import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router, NavigationEnd } from '@angular/router';
import { CartService } from './services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Depi-GradProject';
  // isAuth = this.router.url.startsWith('auth');
  isAuth = false;
  currentRoute: string = '';

  constructor(
    private authService: AuthService,
    private router: Router,
    private cart: CartService
  ) {}

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.urlAfterRedirects;
      }
    });
    this.cart.setState();
  }
}
