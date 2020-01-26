import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseurl = "";
  httpHeaders = new HttpHeaders({'Content-type': 'application/json'});
  constructor(private http: HttpClient) { }

  getDataPoints(): Observable<any> {
    return this.http.get(this.baseurl + '/data/', {
      headers: this.httpHeaders
    });
  }
  updateData(data): Observable<any> {
    const input = {word: data.word, time: data.time }
    return this.http.put(this.baseurl + '/data/', input, {
      headers: this.httpHeaders
    });
  }
}
