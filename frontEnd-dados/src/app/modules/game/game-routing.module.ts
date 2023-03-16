import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProtectGuard } from './guard/protect.guard';
import { PlayingComponent } from './pages/playing/playing.component';
import { PlaysComponent } from './pages/plays/plays.component';
import { RegisterPlayersComponent } from './pages/register-players/register-players.component';
import { WinnerComponent } from './pages/winner/winner.component';

const routes: Routes = [
  {
    path: '',
    component: RegisterPlayersComponent,
  },
  {
    path: 'startGame',
    component: PlaysComponent, canActivate: [ProtectGuard],
    children:[
      {
        path: 'playing',
        component: PlayingComponent, canActivate: [ProtectGuard]
      },
      {
        path: 'winner',
        component: WinnerComponent, canActivate: [ProtectGuard]
      },
    ]
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameRoutingModule { }
