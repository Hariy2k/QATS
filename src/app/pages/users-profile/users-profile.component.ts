import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/datatypes';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-users-profile',
  templateUrl: './users-profile.component.html',
  styleUrls: ['./users-profile.component.css']
})
export class UsersProfileComponent implements OnInit {
  UserDetails!: User;
  constructor(private userService: UserServiceService) { }

  ngOnInit(): void {
    this.getUserProfileDetails()
  }
  getUserProfileDetails(){
    const userEmail = JSON.parse(localStorage.getItem('userData') || '{}')['email']
    this.userService.getUserbyEmail(userEmail).subscribe((result:any)=>{
      this.UserDetails = result[0];
      console.log("User Profile Details: ", this.UserDetails)
    })
  }
}
