import { Component, Injectable, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PlayerService } from '../../services/player.service';
import { AppComponent } from '../../app.component';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrl: './players.component.scss'
})

@Injectable({
  providedIn: 'root'
})


export class PlayersComponent implements OnInit {

  // Enabling Score input
  isUpdate: boolean = false;
  buttonTitle: string = "SAVE";

  playerData = {
    username: '',
    email: '',
    phone_number: '',
    gender: '',
    score: 0
  }



  constructor(
    private player: PlayerService,
    private toast: AppComponent,
    private route: ActivatedRoute,
    private router: Router) { }

  // Add Player or Updatae player
  addPlayer(player: NgForm) {
    if (this.buttonTitle === 'UPDATE') {
      console.log(player)
      
      this.player.update(this.route.snapshot.paramMap.get('username'), player)
      .subscribe((res: any) => {
        (res.success) ?
          this.toast.toastSuccess("Success", res.message) :
          this.toast.toastError("Error", res.message);
          this.buttonTitle = "SAVE";
          this.isUpdate= false;
      });
    }

    if (!this.isUpdate) {
      this.player.create(player)
        .subscribe((res: any) => {
          (res.success) ?
            this.toast.toastSuccess("Success", res.message) :
            this.toast.toastError("Error", res.message);
        });
    }

  }


  ngOnInit(): void {
    this.getPlayer(this.route.snapshot.paramMap.get('username'));
  }

  // Populate
  getPlayer(username: any) {

    
    this.player.profile(username)
    .subscribe((res: any) => {
      this.playerData = res.data
      this.isUpdate = true;
        this.buttonTitle = 'UPDATE';

      });
  }

}
