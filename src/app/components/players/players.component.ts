import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PlayerService } from '../../services/player.service';
import { AppComponent } from '../../app.component';
import { LeaderboardService } from '../../services/leaderboard.service';


@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrl: './players.component.scss'
})
export class PlayersComponent {


  constructor(private player: PlayerService,
    private toast: AppComponent,
    private scores:LeaderboardService) { }

  // Add Player
  addPlayer(player: NgForm) {
    this.player.create(player)
      .subscribe((res: any) => {
        (res.success) ?
          this.toast.toastSuccess("Success", res.message) :
          this.toast.toastError("Error", res.message);
  
          // Refresh Leaderboard
          this.scores.getRanking()
      });
  }

  //

}
