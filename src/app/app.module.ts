import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { ProductsComponent } from './pages/products/products.component';
import { CardComponent } from './pages/products/card/card.component';
import { CategoryComponent } from './pages/category/category.component';
import { ButtonComponent } from './components/button/button.component';
import { HomeTopComponent } from './components/home-top/home-top.component';
import { InfoComponent } from './components/info/info.component';
import { InputComponent } from './components/input/input.component';
import { AuthComponent } from './pages/auth/auth.component';

import { HomeComponent } from './pages/home/home.component';



import { FooterComponent } from './components/footer/footer.component';
import { HomeBottomComponent } from './components/homebottom/home-bottom.component';
import { NavComponent } from './components/nav/nav.component';
import { RightRequestComponent } from './components/right-request/right-request.component';
import { RequestComponent } from './pages/request/request.component';
import { LeftRequestComponent } from './components/left-request/left-request.component';
import { ProductNavComponent } from './components/product-nav/product-nav.component';


import { CatButtonComponent } from './components/cat-button/cat-button.component';
import { SliderComponent } from './components/slider/slider.component';

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
    RequestComponent,
    RightRequestComponent,
    LeftRequestComponent,
  
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
