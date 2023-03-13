import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameRoutingModule } from './game-routing.module';
import { RegisterPlayersComponent } from './pages/register-players/register-players.component';


@NgModule({
  declarations: [
    RegisterPlayersComponent
  ],
  imports: [
    CommonModule,
    GameRoutingModule
  ]
})
export class GameModule { }
