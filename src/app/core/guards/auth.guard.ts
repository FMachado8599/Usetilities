import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { AuthService } from '../services/auth.service'; // Asegurate del path correcto
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginAuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean | UrlTree {
    if (this.authService.isLogged()) {
      return true;
    }
    return this.router.createUrlTree(['/login']); // Redirige si no está logueado
  }
}
