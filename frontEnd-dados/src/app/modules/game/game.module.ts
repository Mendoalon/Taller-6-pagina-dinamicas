import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameRoutingModule } from './game-routing.module';
import { RegisterPlayersComponent } from './pages/register-players/register-players.component';
import { ModalComponent } from './components/modal/modal.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PlaysComponent } from './pages/plays/plays.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { PlayingComponent } from './pages/playing/playing.component';
import { WinnerComponent } from './pages/winner/winner.component';



@NgModule({
  declarations: [
    RegisterPlayersComponent,
    ModalComponent,
    PlaysComponent,
    SidebarComponent,
    PlayingComponent,
    WinnerComponent
  ],
  imports: [
    CommonModule,
    GameRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class GameModule { }
