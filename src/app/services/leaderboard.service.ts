import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/';

@Injectable({
  providedIn: 'root'
})
export class LeaderboardService {

  baseUrl: string = 'https://blvcklifestyle-api.onrender.com/api/v1';


  constructor(private http: HttpClient) { }

  // Get table ranking
  getRanking(): Observable<any> {
    return this.http.get(`${this.baseUrl}/players`)
      .pipe()
  }

  // veiw profile
  viewPlayer(username: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/players/${username}`)
      .pipe();
  }

  // delete player
  deletePlayer(username:string): Observable<any>{
    return this.http.delete(`${this.baseUrl}/players/${username}/disable`)
    .pipe();
  }

  // Edit player
  updatePlayer(username: string, payload:any): Observable<any>{
    return this.http.patch(`${this.baseUrl}/players/${username}/edit`, payload)
    .pipe();
  }

  // create player
   create(payload: any) {
    return this.http.post(`${this.baseUrl}/players/create`, payload);
  };

}