import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShopCartComponent } from './components/shop-cart/shop-cart.component';
import { ProductsComponent } from './components/products/products.component';

const routes: Routes = [
  { path: '', component: ProductsComponent },
  { path: 'cart', component: ShopCartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
