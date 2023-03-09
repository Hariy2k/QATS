import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NewUser } from 'src/app/models/datatypes';

@Component({
  selector: 'app-pages-users',
  templateUrl: './pages-users.component.html',
  styleUrls: ['./pages-users.component.css']
})
export class PagesUsersComponent implements OnInit {
  //submitted:boolean = false;

  newUserForm = new FormGroup({
    fullName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    designation: new FormControl('', [Validators.required]),
    employeeID: new FormControl('', [Validators.required]),
    department: new FormControl('', [Validators.required]),
    phoneNumber: new FormControl('', [Validators.required]),
  })

  constructor(private formBuilder: FormBuilder) { }
  ngOnInit(): void {

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
