import { Component, OnInit, Inject, Input } from '@angular/core';
import { DOCUMENT } from '@angular/common'
import { Router } from '@angular/router';
import { CognitoService } from 'src/app/services/cognito.service';
import { UserServiceService } from 'src/app/services/user-service.service';
import { User } from 'src/app/models/datatypes';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  //@Input() logginedUserData:any
  logginedUserData!: User;
  constructor(
    private router: Router,
    private userService: UserServiceService,
    private cognitoService: CognitoService,
    @Inject(DOCUMENT) private document: Document
  ) { }

  async ngOnInit(): Promise<void> {
    if (await this.cognitoService.isAuthenticated()) {
      console.log('from Header')
      this.getLoginedUserdata()
    }
  }
  sidebarToggle() {
    //toggle sidebar function
    this.document.body.classList.toggle('toggle-sidebar');
  }

  signOut() {
    this.cognitoService.signOut().then(() => {
      localStorage.clear()
      this.router.navigate(["/pages-login"])
    })
  }
<<<<<<< HEAD
  
getLoginedUserdata(){
    const userEmail = JSON.parse(localStorage.getItem('userData') || '{}')['email']
   this.userService.getUserbyEmail(userEmail).subscribe((result:any)=>{
=======

  getLoginedUserdata() {
    const userEmail = JSON.parse(localStorage.getItem('userData') || '{}')['email']
    this.userService.getUserbyEmail(userEmail).subscribe((result: any) => {
>>>>>>> 28f25ff330063e711ca8aee578895c7a82291fd8
      this.logginedUserData = result[0];
      console.log("this.logginedUserData: ", this.logginedUserData)
    })
  }

}
