import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ForgetpasswordService } from 'src/app/shared/services/forgetpassword.service';
import { ForgotpasswordComponent } from '../forgotpassword/forgotpassword.component';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent {

constructor(private _ForgetpasswordService:ForgetpasswordService){}
resetPasswordForm:FormGroup = new FormGroup({
  newPassword:new FormControl(null)
})
verifynewPassword():void{


}

}
