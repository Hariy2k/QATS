import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/datatypes';
import { first } from 'rxjs/operators';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-pages-users',
  templateUrl: './pages-users.component.html',
  styleUrls: ['./pages-users.component.css']
})
export class PagesUsersComponent implements OnInit {
  //submitted:boolean = false;

  loading!: boolean;
  usersList!: Array<User>

  newUserForm = new FormGroup({
    fullName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    designation: new FormControl('', [Validators.required]),
    employeeID: new FormControl('', [Validators.required]),
    department: new FormControl('', [Validators.required]),
    phoneNumber: new FormControl('', [Validators.required]),
  })

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserServiceService
  ) {
    this.loading = true
  }

  ngOnInit(): void {
    this.userService.getAllUsers('Quad').pipe().pipe(first()).subscribe((data: any) => {
      console.log(data)
      if (Array.isArray(data)) {
        this.usersList = data
      }
      this.loading = false;
    },
      (error: string) => {
        console.log(error);
        this.loading = false;
      });
  }

  submit() {
    //this.submitted = true;
    var result = this.newUserForm.value
    console.log("New user Form : ", result)
    this.newUserForm.reset()
    if (this.newUserForm.invalid) {
      return
    }
  }

  get f() {
    return this.newUserForm.controls
  }

}
