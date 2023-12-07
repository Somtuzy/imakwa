import { Component, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})


export class AppComponent implements OnInit {
  ngOnInit(): void { 

  }

  constructor() { }

  faIcons = {
    add: faPlus
  };

  addPlayer() {
    console.log('player added');
  }
}
