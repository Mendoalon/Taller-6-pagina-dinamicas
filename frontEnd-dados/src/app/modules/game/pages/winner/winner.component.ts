import { Component, OnInit } from '@angular/core';

//Importación de la interface Games para tipar los datos.
import { Winner } from '../../interfaces/winner.Models';

//Importación del servicio GamerService para emplear sus funciones.
import { GamerService } from '../../services/gamer.service';

@Component({
  selector: 'app-winner',
  templateUrl: './winner.component.html',
  styleUrls: ['./winner.component.css']
})
export class WinnerComponent implements OnInit {
  winner!: Winner;

  //Constructor donde creamos el objeto gamerService de tipo servicio.
  constructor(private gamerService: GamerService) {
  }

  //Ciclo de inicialización del componente.
  ngOnInit(): void {
    this.allwinner();
  }

  //Función para obtener el ganador.
  allwinner(): void {
    this.gamerService.allwinner().subscribe(winner => {
      this.winner = winner;
    })
  }

}
