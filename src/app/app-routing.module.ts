import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponentComponent } from './components/dashboard-component/dashboard-component.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { WishlistComponent } from './wishlist/wishlist.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponentComponent },
  { path: 'cart', component: ShoppingCartComponent },
  { path: 'wishlist', component: WishlistComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
