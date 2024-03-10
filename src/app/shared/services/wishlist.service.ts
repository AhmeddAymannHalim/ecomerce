import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
baseUrl:string ="https://ecommerce.routemisr.com/api/v1/";
wishCounter:BehaviorSubject<number> = new BehaviorSubject(0);
  constructor(private _HttpClient:HttpClient) { }
addToWishList(productId:string):Observable<any>{
  return this._HttpClient.post(this.baseUrl +"wishlist",{
    productId: productId
  })
}
getAllWishlist():Observable<any>{
  return this._HttpClient.get(this.baseUrl +"wishlist");
}
removeItem(prodId:string):Observable<any>{
  return this._HttpClient.delete(this.baseUrl + `wishlist/${prodId}`)
}

}
