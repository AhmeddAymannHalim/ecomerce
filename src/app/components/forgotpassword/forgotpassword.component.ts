import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ForgetpasswordService } from 'src/app/shared/services/forgetpassword.service';


@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent {
email:string ='';
constructor(private _ForgetpasswordService:ForgetpasswordService,private _Router:Router){}
verifyEmail:FormGroup = new FormGroup({
  email:new FormControl(null)
})
resetCodeForm:FormGroup = new FormGroup({
  resetCode:new FormControl(null)
})
resetPasswordForm:FormGroup =new FormGroup({
  newPassword:new FormControl(null)
})

forgetPassword():void{
  var userEmail = this.verifyEmail.value;
  this.email = userEmail;

  this._ForgetpasswordService.forgetPassword(userEmail).subscribe({
  next:(response)=>{
   if(userEmail != null){
    this._Router.navigate(['/resetCode'])
   }


  }
})
}
resetCode():void{
  let userCode = this.resetCodeForm.value;
this._ForgetpasswordService.resetCode(userCode).subscribe({
  next:(response)=>{
    if(userCode != null){
      console.log(response);
      this._Router.navigate(['resetPassword'])
    }
  },
  error:(err)=>{
    console.log('====================================');
    console.log(err);
    console.log('====================================');
  }
})
}

}
