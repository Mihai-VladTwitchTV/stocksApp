// new-api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class newsService {
  private apiUrl = 'https://google-news13.p.rapidapi.com/business?lr=en-US';

  constructor(private http: HttpClient) { }

  // Metoda pentru a obține date de la noul API
  getNewData(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
