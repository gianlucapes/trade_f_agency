import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {IImpiegato} from  './impiegati';
import { throwError as observableThrowError, Observable, observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn:'root'
})

export class ImpiegatiService {

  private _url: string ="../assets/Data/impiegati.json";
  constructor(private http:HttpClient) { }

  getImpiegati() : Observable <IImpiegato[]> {
    return this.http.get<IImpiegato[]>(this._url).pipe(
      catchError(this.errorHandle));
  }

  errorHandle(error:HttpErrorResponse){
     return observableThrowError(error.message || "Internal server error");
 }
}
