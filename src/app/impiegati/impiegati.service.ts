import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {IImpiegato} from  '../impiegati';
import { throwError as observableThrowError, Observable, observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn:'root'
})

export class ImpiegatiService {

  private getImpiegatiUrl: string ="https://localhost:44355/api/Impiegiati/GetAllImpiegati";
  private AddImpiegatoUrl : string = "https://localhost:44355/api/Impiegiati/AddImpiegato"
  constructor(private http:HttpClient) { }

  public getImpiegati() : Observable <any> { 
   return this.http.get(this.getImpiegatiUrl);
  }

  public addImpiegato(impiegato : any) : Observable <any> { 
    return this.http.post(this.AddImpiegatoUrl,impiegato);
   }

  
}
