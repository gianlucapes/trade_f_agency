import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {IDipartimenti} from './dipartimenti';
import { throwError as observableThrowError, Observable, observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DipartimentiService {
  private _url: string ="../assets/Data/dipartimenti.json";
  constructor(private http:HttpClient) { }

  getDipartimenti() : Observable <IDipartimenti[]> {
    return this.http.get<IDipartimenti[]>(this._url).pipe(
      catchError(this.errorHandle));
  }
  errorHandle(error:HttpErrorResponse){
    return observableThrowError(error.message || "Internal server error");
}
}
