
import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartContainer:any ={};

constructor(private _CartService:CartService,private _Router:Router,private _ToastrService:ToastrService){}
 ngOnInit(): void {
     this._CartService.getUserCart().subscribe({
      next:(response)=>{
        this.cartContainer =response.data;


      },
      error:(err)=>{

        console.log(err);
        console.log('====================================');
      }
     });
 }
 removeFromCart(itemId:string):void{
  this._CartService.removeUserCart(itemId).subscribe({
    next:(response)=>{
      this.cartContainer = response.data;

      this._CartService.cartNumber=response.numOfCartItems

      this._ToastrService.error("Item Removed");
    }
  })
 }
 changeCount(id:string,countProduct:number):void{
  if(countProduct >= 1){
    this._CartService.updateUserCart(id,countProduct).subscribe({
      next:(response)=>{
        this.cartContainer =response.data;


      },
      error:(err)=>{
        console.log(err);
      }
    })
  }
 }
}
