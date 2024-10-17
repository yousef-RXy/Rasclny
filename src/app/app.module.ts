import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { CardComponent } from './pages/products/card/card.component';
import { CategoryComponent } from './pages/category/category.component';
import { ButtonComponent } from './components/button/button.component';
import { InputComponent } from './components/input/input.component';
import { HomeTopComponent } from './components/home-top/home-top.component';
import { AuthComponent } from './pages/auth/auth.component';
import { InfoComponent } from './components/info/info.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavComponent } from './components/nav/nav.component';
import { HomeBottomComponent } from './components/homebottom/home-bottom.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    CardComponent,
    CategoryComponent,
    InputComponent,
    HomeTopComponent,
    AuthComponent,
    ButtonComponent,
    InfoComponent,
    FooterComponent,
    NavComponent,
    HomeBottomComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
