import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BannerComponent } from './components/banner/banner.component';
import { PlayersComponent } from './components/players/players.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: BannerComponent
  },
  {
    path: 'player/:username',
    component: PlayersComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
