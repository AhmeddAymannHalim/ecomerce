import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ForgetpasswordService } from 'src/app/shared/services/forgetpassword.service';


@Component({
  selector: 'app-resetcode',
  templateUrl: './resetcode.component.html',
  styleUrls: ['./resetcode.component.css']
})
export class ResetcodeComponent {
  constructor(private _ForgetpasswordService:ForgetpasswordService,private _Router:Router){}

 resetCodeForm:FormGroup = new FormGroup({
  resetCode:new FormControl(null)
 })
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
