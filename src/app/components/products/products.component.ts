import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/shared/interfaces/product';
import { ApiProductService } from 'src/app/shared/services/api-product.service';
import { CartService } from 'src/app/shared/services/cart.service';
import { WishlistService } from 'src/app/shared/services/wishlist.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{

constructor(private _ApiProductService:ApiProductService,private _CartService:CartService,private _ToastrService:ToastrService,private _WishlistService:WishlistService){}
searchTerm:string='';
categories:any[] =[];
products:Product[]=[];
wishListData:any=[];
ngOnInit(): void {
    this._ApiProductService.getAllProducts().subscribe({
      next:(response)=>{
     this.products = response.data;
     console.log('====================================');
     console.log(response);
     console.log('====================================');
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
    this._WishlistService.getAllWishlist().subscribe({
      next:(response)=>{
        const newData = response.data.map((item:any)=>item._id)
       this.wishListData = newData;

      }
    })
}
addCart(id:string):void{
this._CartService.addToCart(id).subscribe({
  next:(response)=>{
    console.log('====================================');
    console.log(response);
    console.log('====================================');
    this._ToastrService.success(response.message)
  }
})
}
addWish(id:string):void{
  this._WishlistService.addToWishList(id).subscribe({
    next:(response)=>{
      this._ToastrService.success(response.message,"WishList")
      this.wishListData=response.data;
      console.log('====================================');
      console.log(response.length);
      console.log('====================================');
      console.log(this.wishListData);


    }
  })
  }
removeWish(id:string):void{
this._WishlistService.removeItem(id).subscribe({
  next:(response)=>{
this.wishListData =response.data;
console.log('====================================');
console.log(this.wishListData);
this._ToastrService.error("Removed")
console.log('====================================');
  }
})
}
}
