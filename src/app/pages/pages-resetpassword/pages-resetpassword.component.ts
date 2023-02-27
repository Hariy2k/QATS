import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IUser, CognitoService } from 'src/app/services/cognito.service';

@Component({
  selector: 'app-pages-resetpassword',
  templateUrl: './pages-resetpassword.component.html',
  styleUrls: ['./pages-resetpassword.component.css']
})
export class PagesResetpasswordComponent {

  user: IUser;
  loading: boolean;
  resetForm!: FormGroup;

  constructor(
    private router: Router,
    private cognitoService: CognitoService,
  ) {
    this.user = {} as IUser;
    this.user = this.router.getCurrentNavigation()?.extras.state?.['user'] as IUser
    this.loading = false;
    this.resetForm = new FormGroup({
      passcode: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      confirmPassword: new FormControl('', [Validators.required]),
    });
  }

  onSubmit(){
    this.user.email = this.resetForm.value.email
    if (this.resetForm.valid) {
      this.cognitoService.forgotPassword(this.user).then(()=>{
        alert('Password reset successful')
        this.router.navigate(['/pages-login']);
      }).catch(()=>{
        alert('Unable to reset password, Please try again')
      })
    }else{
      alert('Please enter all the details')
    }
  }

}
