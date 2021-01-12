import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SignupComponent} from './signup/signup.component';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {PaymentComponent} from './payment/payment.component';
import {SeatbookingComponent} from './seatbooking/seatbooking.component';
import {SearchflightComponent} from './searchflight/searchflight.component';
import {ShowflightComponent} from './showflight/showflight.component';

const routes: Routes = [
  {path:'UserSignup',component:SignupComponent},
  {path:'UserLogin',component:LoginComponent},
  {path:'',component:HomeComponent},
  {path:'Payment',component:PaymentComponent},
  {path:'SeatBooking',component:SeatbookingComponent},
  {path:'SearchFlight',component:SearchflightComponent},
  {path:'ShowFlight',component:ShowflightComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
