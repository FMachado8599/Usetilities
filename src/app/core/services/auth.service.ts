import { Injectable } from '@angular/core';
import { User } from '../../featured/auth/interfaces/loginUser';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  authUser: User | null = null;

  constructor() {}

  login(email: string, password: string): boolean {
    if (email !== 'profe@auth.com.uy' || password !== 'pass') {
      return false;
    }

    this.authUser = {
      email,
      role: 'admin',
    };

    return true;
  }

  logout() {
    this.authUser = null;
  }
}
