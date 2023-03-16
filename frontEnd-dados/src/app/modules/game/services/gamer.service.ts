import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { Games } from '../interfaces/games.Models';
import { environment } from '../../../../environments/environment.prod';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';




@Injectable({
  providedIn: 'root'
})
export class GamerService {
  URL = environment.api;

  

  constructor(private http: HttpClient,
              private router: Router,
              private toastr: ToastrService) { }

  
  registerPlayers(games: Games ): Observable<any>{ 

    return this.http.post( `${this.URL}createGame`,games).pipe(
      map( (data:any) => {       
        this.toastr.success( data.msg, 'éxito' );
        localStorage.setItem('id', data.id);
      })    
  )
}

allGamer(id: string ):  Observable<any>{

  return this.http.get(`${this.URL}game/${id}`).pipe(
    map( (data:any) =>  data.gamer.games )
    
  )
 
}

sevaWinner(winner: any, numeroGanado: number): Observable<any>{

  
  return this.http.post( `${this.URL}winner`,winner).pipe(
    map( (data:any) => {
      this.toastr.success( data.msg , 'éxito');
      this.router.navigate(['games/startGame/', 'winner'] );
    })
  )
}

allwinner(): Observable<any>{
  return this.http.get(`${this.URL}winner`)
  
}

delteGame(): Observable<any>{



  return this.http.delete(`${this.URL}createGame`).pipe(
    map( ( data:any) => {
      this.toastr.info( data.msg , 'Eliminacion');
    })
  )
}


}
