import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.css']
})
export class ControlPanelComponent {
  separatorKeysCodes: number[] = [ENTER, COMMA];
  chipsCtrl = new FormControl('');
  chipsArray: string[] = [];
  chipInput:string | undefined;
  chips:any = [];


  //grouping:any = {};
  //clientName_value:any;
  //clientID_value:any;
  client_Name = [
    {client: "Quadrant", id: "QR"},
    {client: "Deloitte", id: "DL"},
    {client: "Microsoft", id:"MST"},
    {client: "Quadrant", id: "QR"},
    {client: "Deloitte", id: "DL"},
    {client: "Microsoft", id:"MST"},
    {client: "Quadrant", id: "QR"},
    {client: "Deloitte", id: "DL"},
    {client: "Microsoft", id:"MST"},
    {client: "Quadrant", id: "QR"},
    {client: "Deloitte", id: "DL"},
    {client: "Microsoft", id:"MST"},
    {client: "Quadrant", id: "QR"},
    {client: "Deloitte", id: "DL"},
    {client: "Microsoft", id:"MST"},
    {client: "Quadrant", id: "QR"},
    {client: "Deloitte", id: "DL"},
    {client: "Microsoft", id:"MST"},
    {client: "Quadrant", id: "QR"},
    {client: "Deloitte", id: "DL"},
    {client: "Microsoft", id:"MST"},
    {client: "Quadrant", id: "QR"},
    {client: "Deloitte", id: "DL"},
    {client: "Microsoft", id:"MST"},
    {client: "Quadrant", id: "QR"},
    {client: "Deloitte", id: "DL"},
    {client: "Microsoft", id:"MST"},
    {client: "Quadrant", id: "QR"},
    {client: "Deloitte", id: "DL"},
    {client: "Microsoft", id:"MST"},
  ]

  //Skills
  skills: string[] = []
  
  // Roles
  roles: string[] = []

  clientForm = new FormGroup({
    clientName: new FormControl('',Validators.required),
    clientID: new FormControl('',Validators.required)
  })

  submitClientForm(){
    if(this.clientForm.valid){
      console.log("ClientForm: ",this.clientForm.value)
    }
    
      //this.clientName_value  = this.clientForm.value.clientName,
      //this.clientID_value = this.clientForm.value.clientID

      //this.client_details =  this.clientForm.value.clientName+':'+this.clientForm.value.clientID
      //console.log("the dict value: ",this.client_details)
   
  }
  get f(){
    return this.clientForm.controls
  }

  
  //Adding Skills and Checking for Duplicates
  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    if((value || '').trim()){
      if(!this.chipsArray.includes(value.trim())){
        this.chipsArray.push(value.trim())
      }
    }
    // Clear the input value
    event.chipInput!.clear();
    this.chipsCtrl.setValue(null);
    console.log("List: ",this.chipsArray)
  }
  
  //Removing Skills from the Array
  remove(chip: string): void {
    const index = this.chipsArray.indexOf(chip);

    if (index >= 0) {
      this.chipsArray.splice(index, 1);
    }
    console.log("Remove Chips: ",this.chipsArray)
  }
  
  submitChips(){
    if(this.chipsArray.length > 0){
      this.skills = [...this.skills, ...this.chipsArray];
      console.log("Making Empty!")
      this.chipsArray = [];
    }else{
      console.log("Empty")
    }
    
  }
  submitRoles(){
    if(this.chipsArray.length > 0){
      this.skills = [...this.skills, ...this.chipsArray];
      console.log("Making Empty!")
      this.chipsArray = [];
    }else{
      console.log("Empty")
    }
    
  }
  
}
