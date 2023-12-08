import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LeaderboardComponent } from './components/leaderboard/leaderboard.component';
import { PlayersComponent } from './components/players/players.component';
import { DataTablesModule } from 'angular-datatables';
import { HttpClientModule } from '@angular/common/http';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MAT_DIALOG_DEFAULT_OPTIONS, MatDialog, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { BannerComponent } from './components/banner/banner.component';
import { ToastrModule } from 'ngx-toastr';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    LeaderboardComponent,
    PlayersComponent,
    BannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    DataTablesModule,
    HttpClientModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule,
    MatDialogModule,
    MatDialogActions,
    MatDialogClose,
    MatDialogContent,
    FormsModule,
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [{
    provide: MAT_DIALOG_DEFAULT_OPTIONS,
    useValue: {hasBackdrop: true}
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
