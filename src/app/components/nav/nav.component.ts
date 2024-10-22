import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  isDropdownVisible = false;
  isCartVisible = false;
  categoryClass = 'link';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.categoryClass +=
          event.url.slice(1) === 'singleProduct' ||
          event.url.slice(1) === 'products'
            ? +'active'
            : '';
      }
    });
  }

  toggleDropdown() {
    this.isDropdownVisible = !this.isDropdownVisible;
  }

  logOut() {
    localStorage.removeItem('token'); // Use the correct key for your token
    location.reload(); // Refreshes the page
  }
}
