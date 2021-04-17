import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {IImpiegato} from  '../impiegati';
import { throwError as observableThrowError, Observable, observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn:'root'
})

export class ImpiegatiService {

  private _url: string ="https://localhost:44355/api/Impiegiati/GetAllImpiegati";
  constructor(private http:HttpClient) { }
  public getImpiegati() : Observable <IImpiegato []> { 
   return this.http.get<IImpiegato []>(this._url);
  }

  
}
