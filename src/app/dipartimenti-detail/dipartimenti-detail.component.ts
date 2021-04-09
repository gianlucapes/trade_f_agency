import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,ParamMap} from '@angular/router';


@Component({
  selector: 'app-dipartimenti-detail',
  templateUrl: './dipartimenti-detail.component.html',
  styleUrls: ['./dipartimenti-detail.component.css']
})
export class DipartimentiDetailComponent implements OnInit {

  public DipartimentoCode : any;
  public DipartimentoDes : any ;
  constructor(private route  :ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params =>{
      this.DipartimentoCode = params.get('GeoCode')
      
    })
  }

}
