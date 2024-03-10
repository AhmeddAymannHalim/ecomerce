import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/shared/interfaces/product';
import { ApiProductService } from 'src/app/shared/services/api-product.service';
import { CartService } from 'src/app/shared/services/cart.service';
import { WishlistService } from 'src/app/shared/services/wishlist.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['<i class="fa-solid fa-caret-left"></i>', '<i class="fa-solid fa-caret-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 6
      }
    },
    autoplay:true,
    nav: true
  }
  MainSlider: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    items:1,
    autoplay:true,
    nav: false
  }
constructor(private _ApiProductService:ApiProductService,private _CartService:CartService,private _ToastrService:ToastrService,private _WishlistService:WishlistService){}
searchTerm:string='';
categories:any[] =[];
products:Product[]=[];
cartItemsCount:number =0
ngOnInit(): void {
    this._ApiProductService.getAllProducts().subscribe({
      next:(response)=>{
     this.products = response.data;
      },
      error:(err)=>{
        console.log(err);

      }
    });
    this._ApiProductService.getAllCategories().subscribe({
        next:(response) =>{
          this.categories =response.data;

      },
      error:(err)=>{
        console.log('====================================');
        console.log(err);
        console.log('====================================');
      }

    })

}
addCart(id:string):void{
this._CartService.addToCart(id).subscribe({
  next:(response)=>{
 this._CartService.cartNumber.next(response.numOfCartItems);
    this._ToastrService.success(response.message)
  }
})
}
addWish(id:string):void{
this._WishlistService.addToWishList(id).subscribe({
  next:(response)=>{
    this._ToastrService.success(response.message,"WishList")
    


  }
})
}
}
