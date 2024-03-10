import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginEror:string ='';
  isLoading:boolean =false;
  constructor(private _AuthService:AuthService,private _Router:Router , private _FormBuilder:FormBuilder){}
  loginForm:FormGroup = this._FormBuilder.group({
    email:[null,[Validators.required,Validators.email]],
    password:[null,[Validators.required,Validators.pattern(/^[A-z][a-z0-9]{6,}$/)]]
  });
  // loginForm:FormGroup = new FormGroup({
  //   email:new FormControl(null,[Validators.required,Validators.email]),
  //   password:new FormControl(null,[Validators.required,Validators.pattern(/^[A-z][a-z0-9]{6,}$/)])
  //  });

 handleLogin(){
  if(this.loginForm.valid){
    this.isLoading=true;
    this._AuthService.setLogin(this.loginForm.value).subscribe({
      next:(response)=>{
        if(response.message == 'success'){
          localStorage.setItem('eToken',response.token);
          this._AuthService.saveUserData();
          this._Router.navigate(['/home']);
          this.isLoading=false;

        }
      },
      error:(err)=>{
       this.loginEror =err.error.message;
       this.isLoading=false;
      }
    });
  }
  else{
    this.loginForm.markAllAsTouched();
  }
 }

 }
