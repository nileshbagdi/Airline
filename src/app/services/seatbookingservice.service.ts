import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http'
import {Observable,of} from 'rxjs';
import {ISeatbooking} from './../models/iseatbooking';
import { FileDetector } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class SeatbookingServiceService {
  url='http://localhost/Airlinewebsite/api/booking';
  httpOptions={
    headers:new HttpHeaders({'Content-Type':'application/json'})
  };
    constructor(private http:HttpClient) { }
    pid : number;
    fid : string;
    AddBooking(pid : number,fid : string,seatbooking : ISeatbooking):Observable<ISeatbooking> {
      return this.http.post<ISeatbooking>(this.url+"/AddBooking?pid="+pid+"&fid="+fid,seatbooking,this.httpOptions);
    }
    TicketID : number;
    EditBooking(TicketID : number ,seatbooking:ISeatbooking):Observable<ISeatbooking> {
      return this.http.put<ISeatbooking>(this.url+"/EditBooking?TicketID="+TicketID,seatbooking,this.httpOptions);
    }
}
