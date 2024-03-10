import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForgetpasswordService {
baseurl:string ="https://ecommerce.routemisr.com/api/v1/auth/";
email:any = localStorage.getItem('email');
  constructor(private _HttpClient:HttpClient) { }
  forgetPassword(useremail:object):Observable<any>{
    return this._HttpClient.post(this.baseurl + "forgotPasswords" , useremail)
  }
  resetCode(code:object):Observable<any>{
    return this._HttpClient.post("https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode",code);
  }
  resetPassword(resetPassword:object):Observable<any>{
    return this._HttpClient.put("https://ecommerce.routemisr.com/api/v1/auth/resetPassword",resetPassword)
  }
}
