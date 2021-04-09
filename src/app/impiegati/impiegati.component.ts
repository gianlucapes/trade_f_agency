import { Component, OnInit } from '@angular/core';
import {ImpiegatiService} from '../impiegati.service';
@Component({
  selector: 'impiegati',
  templateUrl: './impiegati.component.html',
  styleUrls: ['./impiegati.component.css']
})
export class ImpiegatiComponent implements OnInit {

  public impiegati : any =[];
  constructor(private _impiegatiService:ImpiegatiService) { }
  public errorMsg : any;
  ngOnInit(): void {
    this._impiegatiService.getImpiegati().pipe()
    .subscribe(data =>{
      this.impiegati = data
    });
  }

}
