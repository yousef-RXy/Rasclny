import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  isDropdownVisible = false;
  isCartVisible = false;

  toggleDropdown() {
    console.log('Toggle dropdown function executed');
    this.isDropdownVisible = !this.isDropdownVisible;
  }
  logOut() {
    console.log('User logged out');
    localStorage.removeItem('token'); // Use the correct key for your token
    location.reload(); // Refreshes the page
  }
  
  tooglCart(){
    this.isCartVisible = !this.isCartVisible;
  }

}
