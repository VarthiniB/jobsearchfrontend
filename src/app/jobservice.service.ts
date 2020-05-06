import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class JobserviceService {

  constructor(private http: HttpClient) { }

  getConfig() {
    return this.http.get("http://localhost:8000/getfromdb");
  }
}
