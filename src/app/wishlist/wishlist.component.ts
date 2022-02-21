import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service.service';
import { HttpServiceService } from '../services/http-service.service';
import { WishlistService } from '../wishlist.service';


@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {


  courses: any;
  priceList: { id: string; name: string; }[] = [];
  dataCopy: any;
  courseName:any;
  cartValue: any = 0;
  cart: any= [];
  constructor(public httpService: HttpServiceService, private route:Router, private cartService: CartService, private wishlistService: WishlistService) { }

  ngOnInit(): void {
    this.priceList = [
      {id:'default', name: 'Default'},
      { id: 'low', name: "Low - High" },
      { id: 'high', name: "High - Low" },
    ];

    this.dataCopy = [...this.courses] =  this.wishlistService.getwishlistItems();

  }

  priceChanged(e:any) {
    if(e == 'low') {
      this.courses.sort((a:any, b:any) => parseFloat(a.actual_price) - parseFloat(b.actual_price));
    } else if(e == 'high') {
      this.courses.sort((a:any, b:any) => parseFloat(b.actual_price) - parseFloat(a.actual_price));
    } else {
      this.courses = [];
      this.courses = this.dataCopy;
    }
  }


 searchCourse(value:any){
    if(!value){
       this.courses = this.dataCopy;
    }
    this.courses = Object.assign([], this.dataCopy).filter(
       (item:any) => item.title.toLowerCase().indexOf(value.toLowerCase()) > -1
    )
 }

 addToCart(val:any) {
   this.cart.push(val);
   this.cartService.setcartItems(val);
   this.wishlistService.removewishlistItem(val);
   console.log(this.cart)
   this.cartValue = this.cart.map((item:any) => +item.actual_price).reduce((prev:any, curr:any) => prev + curr, 0);

 }

 goToCart(){
  this.route.navigate(['/cart']); // navigate to other page
}
}

