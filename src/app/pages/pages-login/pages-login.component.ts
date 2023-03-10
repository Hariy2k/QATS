import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs';
import { CognitoService, IUser } from 'src/app/services/cognito.service';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-pages-login',
  templateUrl: './pages-login.component.html',
  styleUrls: ['./pages-login.component.css']
})
export class PagesLoginComponent implements OnInit {

  user: IUser;
  loading!: boolean;
  userLoginInForm!: FormGroup;
  //Storing User Data
  userDataArray: any;
  userData: any;

  constructor(
    private router: Router,
    private cognitoService: CognitoService,
    private userService: UserServiceService
  ) {
    this.user = {} as IUser;
    this.userLoginInForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  ngOnInit(): void {

  }

  signIn() {
    this.user.email = this.userLoginInForm.value.email;
    this.user.password = this.userLoginInForm.value.password;
    if (this.userLoginInForm.valid) {
      this.cognitoService.signIn(this.user).then(() => {
        alert('Cognito login successful')
        console.log("Email: ", this.user.email)
        this.userService.getUserbyEmail(this.user.email).pipe().pipe(first()).subscribe((result: any) => {
          console.log("Loggined user Details by email ID: ", result[0])
          //Storing User Data in Local Storage
          //this.userDataArray  = result[0];
          //console.log("User Data: ",this.userData)
          localStorage.setItem('userData', JSON.stringify(result[0]))
          this.router.navigate(['/dashboard']);
        })
      }).catch(() => {
        alert('Login falied, Check your email and password')
      })
    } else {
      alert('Please enter your email and password')
    }
  }

  enableLoading(setload: boolean) {
    if (setload) {
      this.loading = setload
      this.userLoginInForm.controls['email'].disable()
      this.userLoginInForm.controls['password'].disable()
    }
    else {
      this.loading = setload
      this.userLoginInForm.controls['email'].enable()
      this.userLoginInForm.controls['password'].enable()
    }
  }
}
