import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/shared/services/cart.service';
import { WishlistService } from 'src/app/shared/services/wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
constructor(private _WishlistService:WishlistService,private _ToastrService:ToastrService,private _CartService:CartService){}
wishlistContainer:any ={};
ngOnInit(): void {
    this._WishlistService.getAllWishlist().subscribe({
      next:(response)=>{
      this.wishlistContainer = response.data;



      }
    })
}
removeItem(prodId:string):void{
  this._WishlistService.removeItem(prodId).subscribe({
    next:(response)=>{
      console.log(response);
    this._ToastrService.success(response.status);
    this.ngOnInit();

    }
  })
}
addtoCart(productId:string):void{
this._CartService.addToCart(productId).subscribe({
  next:(response)=>{
    if(response.status == "success"){
      this.removeItem(productId)
    }

  }
})
}
}
