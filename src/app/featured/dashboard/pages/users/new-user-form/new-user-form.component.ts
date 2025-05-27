import { Component, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { provideNativeDateAdapter } from '@angular/material/core';
import { UsersService } from '../../../../../core/services/users.service';
import { User } from '../../../../../core/interfaces/users-interface';

@Component({
  selector: 'dashboard-new-user-form',
  templateUrl: './new-user-form.component.html',
  styleUrls: ['./new-user-form.component.scss'],
  standalone: false,
})
export class NewUserFormComponent {
  @Output() submitted = new EventEmitter<void>();
  @Output() cancelled = new EventEmitter<void>();

  public newUserForm: FormGroup;

  constructor(private fb: FormBuilder, private usersService: UsersService) {
    this.newUserForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      email: ['', [Validators.required, Validators.email]],
      isAdmin: [false]
    });
  }

  submit() {
    if (this.newUserForm.valid) {
      this.usersService.getUsers().subscribe(users => {
        const maxId = Math.max(...users.map(u => u.id), 0);
        const newUser: User = {
          id: maxId + 1,
          username: this.newUserForm.value.username,
          password: 'defaultPassword',
          email: this.newUserForm.value.email,
          isAdmin: this.newUserForm.value.isAdmin
        };
        this.usersService.registerUser(newUser).subscribe(() => {
          this.submitted.emit();
          this.newUserForm.reset();
        });
      });
    }
  }

  onCancelled() {
    this.newUserForm.reset();
    this.cancelled.emit();
  }


  get usernameControl(){
    return this.newUserForm.get('username');
  }
  get isUsernameInvalid(){
    return this.usernameControl?.touched && this.usernameControl?.invalid;
  }
  get emailControl(){
    return this.newUserForm.get('email');
  }
  get isEmailInvalid(){
    return this.emailControl?.touched && this.emailControl?.invalid;
  }
}
