import { Injectable } from '@angular/core';
import { User } from '../../core/interfaces/users-interface';
import { Router } from '@angular/router';
import { UsersService } from './users.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  authUser: User | null = null;

  private isAuth: boolean = false;

  constructor(private usersService: UsersService, private router: Router) {
    const userData = localStorage.getItem('authUser');
    const authStatus = localStorage.getItem('isAuth');

    if (userData && authStatus === 'true') {
      this.authUser = JSON.parse(userData);
      this.isAuth = true;
  }
  }

  login(email: string, password: string): Observable<boolean> {
    return this.usersService.getUserByEmailAndPassword(email, password).pipe(

    map(users => {
      const user = users[0];
      if (user) {
        this.authUser = user;
        this.isAuth = true;
        localStorage.setItem('authUser', JSON.stringify(user));
        localStorage.setItem('isAuth', 'true');
        return true;
      } else {
        return false;
      }
    })
  );
}

  logout() : void {
    this.authUser = null;
    this.isAuth = false;
    localStorage.removeItem('authUser');
    localStorage.removeItem('isAuth');
    this.router.navigate(['auth']);
  }

  isLogged(): boolean {
    return !!localStorage.getItem('isAuth');
  }
}
