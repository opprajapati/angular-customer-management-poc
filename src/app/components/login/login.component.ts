import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule, } from '@angular/common';
import { Router } from '@angular/router';
import { CustomersComponent } from '../customers/customers.component';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,CommonModule,],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor( private route:Router){

  }
  loginForm={
    email:'',
    password:''
  }

  onSubmit(){
    console.log(JSON.stringify(this.loginForm))
    this.route.navigate(['customers'])
  }
}
