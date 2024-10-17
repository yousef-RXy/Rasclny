import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';


import { ProductsComponent } from './pages/products/products.component';
import { CardComponent } from './pages/products/card/card.component';
import { CategoryComponent } from './pages/category/category.component';
import { ButtonComponent } from './components/button/button.component';
import { InputComponent } from './components/input/input.component';
import { HomeTopComponent } from './components/home-top/home-top.component';
import { AuthComponent } from './pages/auth/auth.component';
import { InfoComponent } from './components/info/info.component';

import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeBottomComponent } from './components/homebottom/home-bottom.component';
import { ProductNavComponent } from './components/product-nav/product-nav.component';


import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CatButtonComponent } from './components/cat-button/cat-button.component';
import { SliderComponent } from './components/slider/slider.component';
import { HomeComponent } from './pages/home/home.component';
import { CartComponent } from './components/cart-under edit/cart.component';



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

    NavComponent,


    FooterComponent,
    NavComponent,
    HomeBottomComponent,
    ProductNavComponent,
    AppComponent,
    CatButtonComponent,
    SliderComponent,
    HomeComponent,
    CartComponent,

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
