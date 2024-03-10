import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService{
eToken:any = {token:localStorage.getItem('eToken')};
cartNumber:BehaviorSubject<number> = new BehaviorSubject(0)
  constructor(private _HttpClient:HttpClient,private _Router:Router) { }


  addToCart(productId:string):Observable<any>{

    return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/cart',
    {productId: productId},

    )
  }
  getUserCart():Observable<any>{
  return this._HttpClient.get('https://ecommerce.routemisr.com/api/v1/cart?')
  }
  removeUserCart(productId:string):Observable<any>{
    return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`
    );
  }
  updateUserCart(productId:string,count:number):Observable<any>{
    return this._HttpClient.put(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`,
    {"count": count},
    {headers:this.eToken}

    )
  }
  checkOut(cartId:string,shippingAddress:object):Observable<any>{
return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=http://localhost:4200`,
{
  shippingAddress:shippingAddress,
}
)
  }

}
