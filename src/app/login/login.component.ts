import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginserviceService}from './../services/loginservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private _activatedRouter: ActivatedRoute, private _router: Router, private loginService:LoginserviceService) {​​​​​ }​​​​​

  ngOnInit(): void {​​​​​
  }​​​​​

  onSubmit(f: NgForm){​​​​​
    console.log(f.value.username, f.value.password);
    this.loginService.GetUserLoginCheck(f.value.username, f.value.password).subscribe()
        this._router.navigate(['/list']);
      }

}
