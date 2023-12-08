import { Component, Injectable, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AppComponent } from '../../app.component';
import { Router } from '@angular/router';
import { LeaderboardService } from '../../services/leaderboard.service';


@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrl: './players.component.scss'
})

@Injectable({
  providedIn: 'root'
})


export class PlayersComponent implements OnInit {

  playerData = {
    username: '',
    email: '',
    phone_number: '',
    gender: '',
    score: 0
  }


  constructor(private router: Router, private player: LeaderboardService, private toast: AppComponent) { }

  // Register Player
  createPlayer(payload: NgForm) {
    this.player.create(payload)
      .subscribe((res: any) => {
        console.log(res);
        (res.success) ?
          this.toast.toastSuccess("Success", res.message) :
          this.toast.toastError("Error", res.message);
          payload.reset();

          this.router.navigateByUrl('/');
      });
  }

  ngOnInit(): void { }

}
