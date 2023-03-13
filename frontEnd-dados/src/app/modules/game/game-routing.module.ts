import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterPlayersComponent } from './pages/register-players/register-players.component';

const routes: Routes = [
  {
    path: '',
    component: RegisterPlayersComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameRoutingModule { }
