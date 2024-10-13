import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { CategoryComponent } from './pages/category/category.component';
import { AuthComponent } from './pages/auth/auth.component';
import { SinglProductComponent } from './pages/singl-product/singl-product.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'products/:category', component: ProductsComponent },
  { path: 'categories', component: CategoryComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'auth/:mode', component: AuthComponent },
  {path:'singleProduct/:productId',component:SinglProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
