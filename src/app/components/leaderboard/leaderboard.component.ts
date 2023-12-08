import { Component, OnInit} from '@angular/core';
import { faCog, faPen, faTrash, faUser } from '@fortawesome/free-solid-svg-icons';
import { LeaderboardService } from '../../services/leaderboard.service';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrl: './leaderboard.component.scss'
})

export class LeaderboardComponent implements OnInit {

  playerRankings:any = [{
    username: '',
    score: '',
    _id: '',
    email: '',
    profile_image: ''
  }];

  faIcons = {
    cog: faCog,
    pen: faPen,
    delete: faTrash,
    user: faUser
  }

  constructor(private leaderboard: LeaderboardService) { };

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
}