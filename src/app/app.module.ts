import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { HttpClientModule } from '@angular/common/http';
import { CardComponent } from './pages/products/card/card.component';
import { ButtonComponent } from './pages/button/button.component';
import { CategoryComponent } from './pages/category/category.component';
import { CategoryitemComponent } from './pages/category/categoryitem/categoryitem.component';
import { InputComponent } from './component/input/input.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    CardComponent,
    ButtonComponent,
    CategoryComponent,
    CategoryitemComponent,
    InputComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
