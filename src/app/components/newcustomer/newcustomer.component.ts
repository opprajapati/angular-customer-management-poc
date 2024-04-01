import { Component, OnInit } from '@angular/core';
import { StepsModule } from 'primeng/steps';
import {MatStepperModule} from '@angular/material/stepper';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterService } from '../../services/postservices/register.service';




@Component({
  selector: 'app-newcustomer',
  standalone: true,
  imports: [
    StepsModule,
    MatStepperModule,FormsModule
    ,MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule,
   
  ],
  templateUrl: './newcustomer.component.html',
  styleUrl: './newcustomer.component.css'
})
export class NewcustomerComponent implements OnInit {
   ngOnInit(): void {
     
   }
   constructor( private register: RegisterService){

   }
  newCustomerForm= new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl(),
    mobileNo: new FormControl(),
    dob: new FormControl(),
    address: new FormControl(),
    gender: new FormControl(),
    email: new FormControl(),
    country: new FormControl(),
    password: new FormControl(),
    image: new FormControl(), 
  })

  onRegister(data:any){
   this.register.onRegister(data).subscribe((res)=>
   console.log(res) 
   )
   console.log("Successfully Registered !")
  }
}
