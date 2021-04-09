import { Component, OnInit } from '@angular/core';
import {NavbarComponent} from './navbar/navbar.component';
import {NgbConfig} from '@ng-bootstrap/ng-bootstrap';
import {ImpiegatiComponent} from './impiegati/impiegati.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent implements OnInit {
  title = 'Pisano Agency';
  disabledValue = false;
  classe="alert alert-primary";
  bottoneDisabled="btn btn-danger";
  textDisabled="Disabled";
  records={};
  constructor(){
   
  }
  callMyFunction(){
    this.disabledValue=!this.disabledValue;
    if(this.disabledValue)
    {
      this.classe="alert alert-danger";
      this.bottoneDisabled="btn btn-primary";
      this.textDisabled="Enabled";
    }
   
    else 
    {
      this.classe="alert alert-success";
      this.bottoneDisabled="btn btn-danger";
      this.textDisabled="Disabled";
    }
     
  }
  text='scrivi qualcosa';
  ngOnInit(){

  }
}
