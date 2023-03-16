import { Component, OnInit } from '@angular/core';
import { Games } from '../../interfaces/games.Models';
import { GamerService } from '../../services/gamer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-playing',
  templateUrl: './playing.component.html',
  styleUrls: ['./playing.component.css']
})
export class PlayingComponent implements OnInit {
  dado: string = '../assets/img/dice1.png'
  id: any = '';
  gamer!: any;
  valores: number[] = [0, 0, 0];
  mensaje: string = '';
  numero: number = 0;
  btn: string = '';
  ganador!: Games;
  numganador!: number;

  constructor(private router: Router,
    private gamerService: GamerService) { }

  ngOnInit(): void {

    this.allGamer();
    this.btn = 'Lanzar Dado';
  }




  allGamer() {
    // Verificar si el elemento "miDato" existe en el Local Storage
    if (localStorage.getItem('id') !== null) {
      // Si existe, recuperar el elemento
      this.id = localStorage.getItem('id');

      this.gamerService.allGamer(this.id).subscribe(game => {
        this.gamer = game;

      })
    } else {
      // Si no existe, hacer algo más
      console.log('El elemento "miDato" no existe en el Local Storage.');
    }

  }

  llamarServicio() {
    if (this.btn === 'Lanzar Dado') {
      this.lanzarDado();
    } else if (this.btn === 'Guardar Partida') {
      this.gamerService.sevaWinner(this.ganador, this.numero).subscribe(msg => {
        this.btn = 'Lanzar Dado';
        this.mensaje = '';
      });
    }
  }

  lanzarDado(): void {

    if ((this.valores[0] === this.valores[1]) || (this.valores[1] === this.valores[2]) || (this.valores[0] === this.valores[2])) {
      this.mensaje = 'No se pueden repetir los valores'
      setTimeout(() => {
        this.mensaje = '';
      }, 2000);
      return;
    }

    this.numero = Math.round(Math.random() * 5) + 1;
    this.dado = `../assets/img/dice${this.numero}.png`
    this.verifcarGanador();
  }

  verifcarGanador(): void {
    for (let i = 0; i < this.valores.length; i++) {
      if (this.numero === this.valores[i]) {
        this.mensaje = `Has ganado ${this.gamer[i].name}`;
        this.btn = 'Guardar Partida'
        this.gamer[i].winner = this.numero;
        this.ganador = this.gamer[i];
      }
    }
  }






}
