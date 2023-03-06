import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-control-panal',
  templateUrl: './control-panal.component.html',
  styleUrls: ['./control-panal.component.css']
})
export class ControlPanalComponent {

  client_Name = [
    {client: "Quadrant", id: "QR-1592"},
    {client: "Deloitte", id: "DL-1592"},
    {client: "Microsoft", id:"MST"},
    {client: "Quadrant", id: "QR-1592"},
    {client: "Deloitte", id: "DL-1592"},
    {client: "Microsoft", id:"MST"},
    {client: "Quadrant", id: "QR-1592"},
    {client: "Deloitte", id: "DL-1592"},
    {client: "Microsoft", id:"MST"},
    {client: "Quadrant", id: "QR-1592"},
    {client: "Deloitte", id: "DL-1592"},
    {client: "Microsoft", id:"MST"},
    {client: "Quadrant", id: "QR-1592"},
    {client: "Deloitte", id: "DL-1592"},
    {client: "Microsoft", id:"MST"},
    {client: "Quadrant", id: "QR-1592"},
    {client: "Deloitte", id: "DL-1592"},
    {client: "Microsoft", id:"MST"},
    {client: "Quadrant", id: "QR-1592"},
    {client: "Deloitte", id: "DL-1592"},
    {client: "Microsoft", id:"MST"},
    {client: "Quadrant", id: "QR-1592"},
    {client: "Deloitte", id: "DL-1592"},
    {client: "Microsoft", id:"MST"},
    {client: "Quadrant", id: "QR-1592"},
    {client: "Deloitte", id: "DL-1592"},
    {client: "Microsoft", id:"MST"},
    {client: "Quadrant", id: "QR-1592"},
    {client: "Deloitte", id: "DL-1592"},
    {client: "Microsoft", id:"MST"},
  ]
  clientForm = new FormGroup({
    clientName: new FormControl('',Validators.required),
    clientID: new FormControl('',Validators.required)
  })

  submitClientForm(){
    if(this.clientForm.valid){
      console.log("ClientForm: ",this.clientForm.value)
    }
  }
  get f(){
    return this.clientForm.controls
  }
}
