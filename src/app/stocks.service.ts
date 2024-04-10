import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StocksService {

  apiUrl = 'https://tradestie.com/api/v1/apps/reddit';

  constructor(private http: HttpClient) { }


  getStocksInfo(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getStocksByDate(date : String): Observable<any[]>{
    return this.http.get<any[]>(`${this.apiUrl}?date=${date}`);
  }


}
