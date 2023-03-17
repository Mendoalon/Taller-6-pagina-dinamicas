import { Component, OnInit } from '@angular/core';

//Importación de la interface Games para tipar los datos.
import { Games } from '../../interfaces/games.Models';

//Importación del servicio GamerService para emplear sus funciones.
import { GamerService } from '../../services/gamer.service';

@Component({
  selector: 'app-playing',
  templateUrl: './playing.component.html',
  styleUrls: ['./playing.component.css']
})
export class PlayingComponent implements OnInit {

  /**
  * Variables usadas en este componente.
  */
  dice: string = '../assets/img/dice1.png'
  id: any = '';
  gamer!: any;
  values: number[] = [0, 0, 0];
  messages: string = '';
  number: number = 0;
  btn: string = '';
  winner!: Games;

  //Constructor donde creamos el objeto gamerService de tipo servicio.
  constructor(private gamerService: GamerService) { }

  //Ciclo de inicialización del componente.
  ngOnInit(): void {

    this.allGamer();
    this.btn = 'Lanzar Dado';
  }

  /**
  * Función para obtener el juego guardado.
  */
  allGamer() {

    // Verificar si el elemento "miDato" existe en el localStorage.
    if (localStorage.getItem('id') !== null) {

      // Si existe, recuperar el elemento
      this.id = localStorage.getItem('id');

      this.gamerService.allGamer(this.id).subscribe(game => {
        this.gamer = game;

      })
    } else {

      // Si no existe, hacer algo más
      console.log('El elemento "id" no existe en el Local Storage.');
    }

  }

/**
* Función donde validamos el valor del botón btn y dependiendo su valor consumimos alguno de los dos servicios.
*/
  callServices() {
    if (this.btn === 'Lanzar Dado') {
      this.diceLaunch();
    } else if (this.btn === 'Guardar Partida') {
      this.gamerService.sevaWinner(this.winner).subscribe(msg => {
        this.btn = 'Lanzar Dado';
        this.messages = '';
      });
    }
  }

  /**
  * Función lanzar dado, validamos campos y generamos valor a las variables. 
  */
  diceLaunch(): void {

    if ((this.values[0] === this.values[1]) || (this.values[1] === this.values[2]) || (this.values[0] === this.values[2])) {
      this.messages = 'No se pueden repetir los valores'
      setTimeout(() => {
        this.messages = '';
      }, 2000);
      return;
    }

    this.number = Math.round(Math.random() * 5) + 1;
    this.dice = `../assets/img/dice${this.number}.png`
    this.verifyWinner();
  }

  /**
  * Función donde validamos al ganador y lo guardamos.
  */
  verifyWinner(): void {
    for (let i = 0; i < this.values.length; i++) {
      if (this.number === this.values[i]) {
        this.messages = `Has ganado ${this.gamer[i].name}`;
        this.btn = 'Guardar Partida'
        this.gamer[i].winner = this.number;
        this.winner = this.gamer[i];
      }
    }
  }


}
