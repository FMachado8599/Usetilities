import { Injectable } from '@angular/core';
import { User } from '../../featured/auth/interfaces/loginUser';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  authUser: User | null = null;

  private isAuth: boolean = false;

  constructor(private router: Router) {
    const userData = localStorage.getItem('authUser');
    const authStatus = localStorage.getItem('isAuth');

    if (userData && authStatus === 'true') {
      this.authUser = JSON.parse(userData);
      this.isAuth = true;
  }
  }

  login(email: string, password: string): boolean {
    if (email !== 'profe@auth.com.uy' || password !== 'pass') {
      return false;
    }

    this.authUser = {
      email,
      password,
      isadmin: true,
    };

    localStorage.setItem('authUser', JSON.stringify(this.authUser));
    localStorage.setItem('isAuth', 'true');

    this.isAuth = true;

    return true;
  }

  logout() : void {
    this.authUser = null;
    this.isAuth = false;
    localStorage.removeItem('authUser');
    localStorage.removeItem('isAuth');
    this.router.navigate(['/auth/login']);
  }

  isLogged(): boolean {
    return this.isAuth;
  }
}
