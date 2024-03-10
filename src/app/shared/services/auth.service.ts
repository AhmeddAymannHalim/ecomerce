import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
userData:any;
  constructor(private _HttpClient:HttpClient,private _Router:Router) { }
  saveUserData(){
    if(localStorage.getItem('eToken')!= null){
      let encodeToken:any = localStorage.getItem('eToken');
      let decodeToken = jwtDecode(encodeToken);
      this.userData = decodeToken;
      console.log(decodeToken);

    }
  }
  setRegister(userData:object):Observable<any>{
   return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/auth/signup',userData)
  }
  setLogin(userDaata:object):Observable<any>{
    return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/auth/signin',userDaata)
  }
  signOut():void{
    this._Router.navigate(['/login']);
    localStorage.removeItem('eToken');
  }
  
}
