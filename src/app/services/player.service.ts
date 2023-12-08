import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LeaderboardService } from './leaderboard.service';

@Injectable({
  providedIn: 'root'
})


export class PlayerService {

  constructor(private http:HttpClient, private BASE_URL: LeaderboardService) { }

  /**
   * Creates a player
   * 
   * @param {Object } player - Form input
   * @returns 
   */
  create(player:object){
    return this.http.post(`${this.BASE_URL.baseUrl}/players/create`, player);
  };

/**
 * Update player profile
 * @param {Object} player - Form input
 * @returns 
 */
  update(player:any){
    return this.http.patch(`${this.BASE_URL.baseUrl}/${player.username}/edit`, player);
  }


};