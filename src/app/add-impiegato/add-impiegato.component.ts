import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,FormControl } from '@angular/forms';
import { ImpiegatiService } from '../impiegati/impiegati.service';

@Component({
  selector: 'app-add-impiegato',
  templateUrl: './add-impiegato.component.html',
  styleUrls: ['./add-impiegato.component.css']
})
export class AddImpiegatoComponent implements OnInit {

  public ImpiegatoForm: FormGroup = new FormGroup({
    
  });
  constructor(private FormBuild : FormBuilder, private Service : ImpiegatiService) 
  { 
    
  }

  ngOnInit(): void {
    this.init();
  }
  public saveImpiegato() : void {
    this.Service.addImpiegato(this.ImpiegatoForm.value)
      .subscribe(result => {
       alert(`Impiegato EntrpriseId = ${result}`);
      });
  }
  private init(): void{
    this.ImpiegatoForm = this.FormBuild.group({
      nome : [] ,
      cognome: [] ,
      qualifica: [] ,
      telefono: [] ,
      immagineProfilo: [] ,
      rackingPoints: [] ,
      dipartimento: [] 
    });
  }

}
