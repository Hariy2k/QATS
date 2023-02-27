import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IUser, CognitoService } from 'src/app/services/cognito.service';

@Component({
  selector: 'app-pages-forgotpassword',
  templateUrl: './pages-forgotpassword.component.html',
  styleUrls: ['./pages-forgotpassword.component.css']
})
export class PagesForgotpasswordComponent {

  user: IUser;
  loading: boolean;
  submitForm!: FormGroup;

  constructor(
    private router: Router,
    private cognitoService: CognitoService,
  ) {
    this.user = {} as IUser;
    this.loading = false;
    this.submitForm = new FormGroup({
      email: new FormControl('', [Validators.required])
    });
  }

  onSubmit(){
    this.user.email = this.submitForm.value.email
    if (this.submitForm.valid) {
      this.cognitoService.forgotPassword(this.user).then(()=>{
        alert('Please check your Email for the passcode')
        this.router.navigate(['/pages-resetpassword'], { state: { user: this.user } })
      }).catch(()=>{
        alert('Unable to send passcode, Please try again')
      })
    }else{
      alert('Please enter your email')
    }
  }

}
