import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor() {

  }

  wishlist:any = [];


  getwishlistItems(){
    return this.wishlist;
  }


  setwishlistItems(item: any){
    this.wishlist.push(item);

  }


  removewishlistItem(item: any){
    this.wishlist = this.wishlist.filter((i: any) => item !== i);
  }

}
