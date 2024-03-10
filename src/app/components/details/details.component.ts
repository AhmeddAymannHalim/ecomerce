import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Product } from 'src/app/shared/interfaces/product';
import { ApiProductService } from 'src/app/shared/services/api-product.service';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  SliderDetails: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['<i class="fa-solid fa-caret-left"></i>', '<i class="fa-solid fa-caret-right"></i>'],
    items:1,
    autoplay:true,
    nav: true
  }
productDetails:any={} as Product;
constructor(private _ApiProductService:ApiProductService,private _ActivatedRoute:ActivatedRoute,private _CartService:CartService){}
ngOnInit(): void {
this._ActivatedRoute.paramMap.subscribe({
  next:(params)=>{
    let detailsId =params.get('id')
    this._ApiProductService.getSpecifcProduct(detailsId).subscribe({
      next:(response)=>{
       this.productDetails = response.data;


      }
    });
  }
})
}
addCart(id:string):void{
  this._CartService.addToCart(id).subscribe({
    next:(response)=>{
      console.log('====================================');
      console.log(response);
      console.log('====================================');
    }
  })
  }
}
