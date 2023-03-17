//Importación de HttpClient para realizar la peticiones al backend
import { HttpClient } from '@angular/common/http';

//Importación de del servicio
import { Injectable } from '@angular/core';

//Importación de operadores de rxjs empleados en la aplicación.
import { map, Observable } from 'rxjs';

//Importación de operadores de Router para la redirección de rutas.
import { Router } from '@angular/router';

//Importación de variables de entorno.
import { environment } from '../../../../environments/environment';

//Importación de ToastrService para generar alertas en la aplicación.
import { ToastrService } from 'ngx-toastr';

//Importación de la interface Games para tipar los datos.
import { Games } from '../interfaces/games.Models';


@Injectable({
  providedIn: 'root'
})
export class GamerService {
  URL = environment.api;

  
  //Constructor donde inicializamos atributos a usar.
  constructor(private http: HttpClient,
              private router: Router,
              private toastr: ToastrService) { }

  
/**
*
* @param games: Recibe un juego
* @returns: Retornar un mensaje exitoso si guarda el game.
*/     
  registerPlayers(games: Games ): Observable<any>{ 

    return this.http.post( `${this.URL}createGame`,games).pipe(
      map( (data:any) => {       
        this.toastr.success( data.msg, 'éxito' );
        localStorage.setItem('id', data.id);
      })    
  )
}

/**
*
* @param id: Recibe un id tipo string
* @returns: Retorna el juego.
*/
allGamer(id: string ):  Observable<any>{

  return this.http.get(`${this.URL}game/${id}`).pipe(
    map( (data:any) =>  data.gamer.games )
    
  )
 
}

/**
*
* @param winner: Recibe objeto ganador.
* @returns: Retornar un mensaje si exitoso si guarda el ganador.
*/
sevaWinner(winner: any): Observable<any>{

  return this.http.post( `${this.URL}winner`,winner).pipe(
    map( (data:any) => {
      this.toastr.success( data.msg , 'éxito');
      this.router.navigate(['games/startGame/', 'winner'] );
    })
  )
}

/**
 * 
 * @returns: Retorna el objeto ganador.
 */
allwinner(): Observable<any>{
  return this.http.get(`${this.URL}winner`)
  
}

/**
*
* @returns: Retorna mensaje que el objeto games a sido eliminado.
*/
delteGame(): Observable<any>{

  return this.http.delete(`${this.URL}createGame`).pipe(
    map( ( data:any) => {
      this.toastr.info( data.msg , 'Eliminacion');
    })
  )
}

}
