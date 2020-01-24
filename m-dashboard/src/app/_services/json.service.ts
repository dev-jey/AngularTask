import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../_models/user';

@Injectable({
  providedIn: 'root'
})
export class JsonService {
  private _jsonURL = 'assets/users.json';
  constructor(private http: HttpClient) { }

  public getJSON(): Observable<any> {
    return this.http.get(this._jsonURL);
  }
}
