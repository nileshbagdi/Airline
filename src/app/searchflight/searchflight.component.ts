import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchflight',
  templateUrl: './searchflight.component.html',
  styleUrls: ['./searchflight.component.css']
})
export class SearchflightComponent implements OnInit {

  constructor() { }

  public show:boolean = false;
  public buttonName:any = 'Round Trip';

  ngOnInit(): void {
  }

  toggle() {
    this.show = !this.show;

    // CHANGE THE NAME OF THE BUTTON.
    if(this.show)  
      this.buttonName = "Single Trip";
    else
      this.buttonName = "Round Trip";
  }
}
