import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl,FormGroup, Validators} from '@angular/forms';
import { NewUser } from 'src/app/models/datatypes';

@Component({
  selector: 'app-pages-users',
  templateUrl: './pages-users.component.html',
  styleUrls: ['./pages-users.component.css']
})
export class PagesUsersComponent implements OnInit{
  //submitted:boolean = false;
  constructor(private formBuilder : FormBuilder){}
  ngOnInit(): void {
   
  }
  newUserForm =  new FormGroup({
    fullname:new FormControl('',[Validators.required]),
    email:new FormControl('',[Validators.required]),
    position:new FormControl('',[Validators.required]),
    employeeid:new FormControl('',[Validators.required])
  })
  

  submit(){
    //this.submitted = true;
    var result = this.newUserForm.value
    console.log("New user Form : ",result)
    this.newUserForm.reset()
    if(this.newUserForm.invalid){
      return
    }
  }
  get f(){
    return this.newUserForm.controls
  }
}
