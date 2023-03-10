import { Component, OnInit ,Input } from '@angular/core';
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
  errorMessage:string='';
  loading!: boolean;
  usersList!: Array<User>
  updateUserData:any;
  newUserForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    designation: new FormControl('', [Validators.required]),
    emp_id: new FormControl('', [Validators.required]),
    department: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
  })

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserServiceService
  ) {
    this.loading = true
  }

  ngOnInit(): void {
   this.getallUsers();
  }

  submit() {
    //this.submitted = true;
    const payload:any = {
      name:this.newUserForm.value.name,
      email:this.newUserForm.value.email,
      department: this.newUserForm.value.department,
      designation:this.newUserForm.value.designation,
      phone:this.newUserForm.value.phone
    }
    const emp_id:any = this.newUserForm.value.emp_id;
    if (this.newUserForm.valid) {
      this.userService.addNewUser(payload,'Quad',emp_id).subscribe((result:any)=>{
        console.log("Result :", result)
        this.newUserForm.reset();
        if(result.body="given data is already exist in dynamodb"){
          this.errorMessage = "User Already Exist!"
        }setTimeout(()=>this.errorMessage='',3000)
      })
    }
    this.getallUsers();
  }

  get f() {
    return this.newUserForm.controls
  }
  formReset(){
    this.newUserForm.reset()
  }
  async updateUser(value: any){
    // const payload:any = {
    //   name:this.newUserForm.value.name,
    //   email:this.newUserForm.value.email,
    //   department: this.newUserForm.value.department,
    //   designation:this.newUserForm.value.designation,
    //   phone:this.newUserForm.value.phone
    // }
    // const emp_id:any = this.newUserForm.value.emp_id;
    console.log("Value of Email: ",value)
    await  this.userService.getUserbyEmail(value).subscribe((result:any)=>{
      this.updateUserData = result[0];
      console.log("this.updateUser",this.updateUserData)
    },
    (error:string)=>{
      console.log("Error :",error)
    }
    )
  }
  
  getallUsers(){
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

}
