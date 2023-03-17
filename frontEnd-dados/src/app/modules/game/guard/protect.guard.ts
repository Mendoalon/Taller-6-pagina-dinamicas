import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProtectGuard implements CanActivate {

  constructor(private router: Router) {}

//Guardián para proteger las rutas de la aplicación
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const item = localStorage.getItem('id'); 

    if (item) {
      return true; // Permite el acceso a la ruta
    } else {
      this.router.navigate(['/']); // Redirige a otra ruta en caso de que el dato no exista en el localStorage
      return false;
    }
  }
  
}
