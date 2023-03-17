import { Component, OnInit } from '@angular/core';

//Importamos los objetos FormBuilder, FormGroup, Validators para crear el formulario reactivo.
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

//Importación de operadores de Router para la redirección de rutas.
import { Router } from '@angular/router';

//Importación de la interface Games para tipar los datos.
import { Games } from '../../interfaces/games.Models';

//Importación del servicio GamerService para emplear sus funciones.
import { GamerService } from '../../services/gamer.service';




@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

 //Formulario reactivo para capturar los datos ingresados.
  myForm!: FormGroup;

  //Variable tipo Game para guardar los datos del juego creado.
  games!: Games;

 //Constructor donde creamos el objeto gamerService de tipo servicio.
  constructor(private gamesService: GamerService,
    private fB: FormBuilder,
    private router: Router,
  ) { }

  //Ciclo de inicialización del componente.
  ngOnInit(): void {
    this.captureForm();
  }

  //Función para crear el objeto formulario.
  captureForm(): void {
    this.myForm = this.fB.group({
      player1: ['', Validators.required],
      player2: ['', Validators.required],
      player3: ['', Validators.required]
    });
  }

  //Funcion para crear el objeto game.
  createGameObje(): void {

    if (!(this.myForm.invalid)) {
      const { player1, player2, player3 } = this.myForm.value;

      this.games = {
        id: "fffff-ggg-jjjjj",
        type: '',
        gamers: [
          player1,
          player2,
          player3
        ]
      }

      //Se envía el objeto game al servicio para guardar en el backend
      this.gamesService.registerPlayers(this.games).subscribe();


      setTimeout(() => {
        this.router.navigate(['games/', 'startGame']);
      }, 1000);

    }


  }
}


