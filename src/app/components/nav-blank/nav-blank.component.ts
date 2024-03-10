import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth.service';
import { CartService } from 'src/app/shared/services/cart.service';
import { WishlistService } from 'src/app/shared/services/wishlist.service';



@Component({
  selector: 'app-nav-blank',
  templateUrl: './nav-blank.component.html',
  styleUrls: ['./nav-blank.component.css']
})
export class NavBlankComponent implements OnInit{
 constructor(private _AuthService:AuthService ,private _CartService:CartService,private _WishlistService:WishlistService){}
cartCount:number =0;
wishCounter:number =0;
ngOnInit(): void {
this._CartService.getUserCart().subscribe({
  next:(res)=>{
    this.cartCount= res.numOfCartItems;

console.log("Cart" ,res.numOfCartItems);

  }
})
this._WishlistService.getAllWishlist().subscribe({
  next:(res)=>{

    this.wishCounter =res.count;
    console.log("WishList",res.count );


  }
})
};



 logOutUser():void{
  this._AuthService.signOut();
 }

}
