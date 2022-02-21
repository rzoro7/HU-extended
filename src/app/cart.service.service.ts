import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }


  cartItems:any = [];


  getCartItems(){
    return this.cartItems;
  }


  setcartItems(item: any){
    this.cartItems.push(item);

  }


  removeCartItem(item: any){
    this.cartItems = this.cartItems.filter((i: any) => item !== i);
  }




}
