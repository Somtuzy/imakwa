import { Component, Injectable, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { PlayersComponent } from './components/players/players.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})

@Injectable({
  providedIn: 'root'
})

export class AppComponent implements OnInit {
  ngOnInit(): void { 

  }

  constructor(public dialog: MatDialog, 
    private toastr: ToastrService
    ) { }

  // Open modal
  openDialog(): void {
    this.dialog.open(PlayersComponent, {
      width: '350px'
    });
  }

// Show Notification
toastSuccess(title:string, message: string){
  this.toastr.success(title, message);
};

toastError(title:string, message: string){
  this.toastr.error(title, message);
};


// Fontawesome Icons
  faIcons = {
    add: faPlus
  };

  // Create a player
  addPlayer() {
    this.openDialog();
  }
}
