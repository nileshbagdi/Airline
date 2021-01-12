import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CustservicesService } from '../services/custservices.service';
import {ICustomer } from './../models/ICustomer'


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  customer: ICustomer={username:"",
  firstname:"",
  lastname:"",
  password:"",
  cpassword:"",
  dob:"",
  emailid:"",
  number:""};
 
 emailPattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
 constructor(public router: Router, public service: CustservicesService) { }

 ngOnInit() {}
 
   addUser() {
     this.service.addUser(this.customer).subscribe( 
       ( ) => {
         alert("Record added");
         this.router.navigate(['/UserLogin']);
       }
     );
   }
 saveUser(customer:ICustomer): void {
   this.customer=customer;
   this.addUser();
 }

}
