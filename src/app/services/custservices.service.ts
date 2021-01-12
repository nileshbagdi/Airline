import { Injectable } from '@angular/core';
import {HttpClient , HttpHeaders } from "@angular/common/http";
import { Observable  } from "rxjs";
import { ICustomer } from './../models/ICustomer';

@Injectable({
  providedIn: 'root'
})
export class CustservicesService {

  readonly rootURL="http://localhost:56131/api/user/Logincred?uname=MrudulSonawane&pwd=pAs$wo"//the root url from web api
  httpOptions={
    headers: new HttpHeaders({'Content-Type': 'Application/json'})
  }

  constructor(private http:HttpClient) { }
  addUser(customer:ICustomer):Observable<ICustomer>{
    return this.http.post<ICustomer>(this.rootURL+"", customer, this.httpOptions);
}
}
