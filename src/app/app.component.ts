import { Component } from '@angular/core';
// import {HomeTopComponent} from './component/home-top/home-top.component'
import { AuthService } from './services/auth.service';
import { FooterComponent } from './component/footer/footer.component'

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

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.urlAfterRedirects;
      }
    });
  }
}
