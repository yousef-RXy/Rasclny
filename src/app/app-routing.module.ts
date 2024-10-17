import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './pages/auth/auth.component';
import { CategoryComponent } from './pages/category/category.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { SinglProductComponent } from './pages/singl-product/singl-product.component';
import { RequestComponent } from './pages/request/request.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'products/:category', component: ProductsComponent },
  { path: 'categories', component: CategoryComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'auth/:mode', component: AuthComponent },
  { path: 'singleProduct/:productId', component: SinglProductComponent },
  { path: 'request', component: RequestComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
