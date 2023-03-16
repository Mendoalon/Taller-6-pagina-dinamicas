import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProtectGuard implements CanActivate {

  constructor(private router: Router) {}


  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const item = localStorage.getItem('id'); // Reemplazar 'mi-dato' por el nombre del dato a verificar  
    
    if (item) {
      return true; // Permite el acceso a la ruta
    } else {
      this.router.navigate(['/']); // Redirige a otra ruta en caso de que el dato no exista en el localStorage
      return false;
    }
  }
  
}
