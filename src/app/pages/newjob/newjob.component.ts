import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormControl,FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-newjob',
  templateUrl: './newjob.component.html',
  styleUrls: ['./newjob.component.css']
})
export class NewjobComponent implements OnInit{
  jobForm = new FormGroup({
    requisition_id: new FormControl('', [Validators.required,Validators.minLength(6),Validators.maxLength(6)]),
    client: new FormControl('', Validators.required),
    role: new FormControl('', Validators.required),
    no_positions: new FormControl('', Validators.required),
    positiontype: new FormControl('', Validators.required),
    experience: new FormControl('', Validators.required),
    primaryskills: new FormControl('', Validators.required),
    secondaryskills: new FormControl('', Validators.required),
    location: new FormControl('', Validators.required),
    salaryrange: new FormControl('', Validators.required),
    currency: new FormControl('', Validators.required),
    worktype: new FormControl('', Validators.required),
    status: new FormControl('', Validators.required),
    startdate: new FormControl('', Validators.required),
    enddate: new FormControl('', Validators.required),
    jobdescription: new FormControl('', Validators.required),
  })
  constructor(private formBuilder : FormBuilder){}
  
  ngOnInit(): void {
   
  }
  submit(){
    console.log("job Form Values: ",this.jobForm.value)
    
  }
  resetJobForm(){
    this.jobForm.reset();
  }
  get f(){
    return this.jobForm.controls;
  }
}
