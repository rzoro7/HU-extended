import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service.service';
import {Router} from '@angular/router'; // import router from angular router
import { WishlistService } from '../wishlist.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  courses:any= [];
  cartPrice: number=0;
  discountPrice: number=0;

  constructor(private cartservice: CartService, private route: Router, private wishlistService: WishlistService) { }

  ngOnInit(): void {
    this.courses = this.cartservice.getCartItems();
    this.calculatePrice();
  }

  calculatePrice(){
    this.cartPrice = this.courses.map((item:any) => +(item.discounted_price? item.discounted_price: item.actual_price)).reduce((prev:any, curr:any) => prev + curr, 0);
    this.discountPrice = this.courses.map((item:any) => +item.discounted_price).reduce((prev:any, curr:any) => prev + curr, 0);
  }

  remove(item: any){
    this.cartservice.removeCartItem(item);
    this.courses = this.cartservice.getCartItems();
    this.calculatePrice();
  }


  addToWishlist(item: any){
   // this.route.navigate(['/wishlist']); // navigate to other page
   this.wishlistService.setwishlistItems(item);
   this.remove(item)

  }
}
