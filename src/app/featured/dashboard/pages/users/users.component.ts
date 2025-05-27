import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../../core/services/users.service';
import { User } from '../../../../core/interfaces/users-interface';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'information-display-users',
  standalone: false,
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent implements OnInit{

  constructor( 
    private usersService: UsersService,
  ){};

  public users: User[] = [];
  private destroy$ = new Subject<void>();

  ngOnInit(): void {
    this.usersService.getUsers().subscribe((data: User[]) => {
      this.users = data;
    });
  }

  loadUsers() {
    this.usersService.getUsers().subscribe(users =>{
      this.users = users
    })
  }

  deleteUser(userId: number) {
    this.usersService.deleteUser(userId).pipe(
      takeUntil(this.destroy$)
    ).subscribe({
      next: () => this.loadUsers(),
      error: (err) => console.error('Error al eliminar', err)
    });
  }

  //------------------------SHOW-HIDE Form------------------------//

  showForm: boolean = false;

  onAddUser() {
    this.showForm = true;
  }

  onFormSubmitted() {
    this.showForm = false;
        setTimeout(() => {
      this.loadUsers();
    }, 500);
  }
  onCancelled(){
    this.showForm = false
  }

}
