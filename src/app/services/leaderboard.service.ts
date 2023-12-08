import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/';

@Injectable({
  providedIn: 'root'
})
export class LeaderboardService {

  baseUrl: string = 'https://blvcklifestyle-api.onrender.com/api/v1';


  constructor(private http: HttpClient) { }

  // Get table ranking
  getRanking():Observable<any> {
    return this.http.get(`${this.baseUrl}/players`)
  }
}
