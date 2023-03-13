import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'games', //TODO: localHost:4200/games
    loadChildren: () => import('./modules/game/game.module').then(m => m.GameModule)
  },
  {
    path: '**', //TODO: No existe te envio a la ruta arriba games
    redirectTo: 'games',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
