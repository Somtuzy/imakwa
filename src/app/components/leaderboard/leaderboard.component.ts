import { Component, Injectable, OnInit} from '@angular/core';
import { faCog, faPen, faTrash, faUser } from '@fortawesome/free-solid-svg-icons';
import { LeaderboardService } from '../../services/leaderboard.service';
import { PlayersComponent } from '../players/players.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrl: './leaderboard.component.scss'
})


@Injectable({
  providedIn: 'root'
})

export class LeaderboardComponent implements OnInit {

  playerRankings: any = [];

  faIcons = {
    cog: faCog,
    pen: faPen,
    delete: faTrash,
    user: faUser
  }

  constructor(private leaderboard: LeaderboardService, 
    private route: ActivatedRoute, private player: PlayersComponent) { };

  ngOnInit(): void {

    // Refresh leaderboard
    this.getScores();
  };


  // Get rankings
  getScores() {
    this.leaderboard.getRanking().subscribe((res: any) => {
      this.playerRankings = res.data.registered_players;
    });
  };

  // Edit player
  // viewPlayer(username: any){
  //   this.player.getPlayer(this.route.snapshot.paramMap.get(`${username}`));
  // }
}
