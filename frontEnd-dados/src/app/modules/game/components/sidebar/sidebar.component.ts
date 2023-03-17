import { Component, OnInit } from '@angular/core';

//Importación de operadores de Router para la redirección de rutas.
import { Router } from '@angular/router';

//Importación del servicio GamerService para emplear sus funciones.
import { GamerService } from '../../services/gamer.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  //Constructor donde creamos el objeto gamerService de tipo servicio.
  constructor(private gamerService: GamerService,
    private router: Router) { }

  //Ciclo de inicialización del componente.
  ngOnInit(): void {
  }

  //Función para salir del juego, borramos el juego en el backend
  exit(): void {
    this.gamerService.delteGame().subscribe(data => {
      this.router.navigate(['/']);
      localStorage.clear();
    })

  }


}
