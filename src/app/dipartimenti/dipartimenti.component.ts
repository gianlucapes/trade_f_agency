import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {DipartimentiService} from './dipartimenti.service';
@Component({
  selector: 'app-dipartimenti',
  templateUrl: './dipartimenti.component.html',
  styleUrls: ['./dipartimenti.component.css']
})
export class DipartimentiComponent implements OnInit {

  constructor(private router : Router, private _dipartimentiService : DipartimentiService) { }

  public dipartimenti :any =[];


  ngOnInit(): void {
    this._dipartimentiService.getDipartimenti().pipe()
    .subscribe(data => this.dipartimenti=data);
  }
onSelect (dipartimenti : any){
 this.router.navigate(['/dipartimenti',dipartimenti.GeoCode]);
}
}
