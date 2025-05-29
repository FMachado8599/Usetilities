import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CustomValidators } from '../../../../../utils/custom-validators';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { UsersService } from '../../../../../core/services/users.service';
import { User } from '../../../../../core/interfaces/users-interface';

@Component({
  selector: 'app-user-edit',
  standalone: false,
  templateUrl: './user-edit.component.html',
  styleUrl: './user-edit.component.scss'
})
export class UserEditComponent  implements OnInit{

  @Output() cancelled = new EventEmitter<void>();

  constructor(
    private fb:FormBuilder,
    private route: ActivatedRoute,
    private usersService: UsersService,
    private router: Router,
  ){}
  
  editUserForm!: FormGroup;
  userId!: number;
  user: User | null = null;

  ngOnInit(): void {
    this.editUserForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      password: ['', [Validators.required, CustomValidators.strongPassword]],
      email: ['', [Validators.required, Validators.email]],
      isAdmin: [false]
    });

    const id = this.route.snapshot.paramMap.get('id');

    if ( id ){
      this.userId = +id;
      
      this.usersService.getUserById(this.userId).subscribe(user => {
        this.user = user;
        this.editUserForm.patchValue({
          username: user.username,
          password: user.password,
          email: user.email,
          isAdmin: user.isAdmin
        });
      })
    }
  }

  submit(){
    if (this.editUserForm.valid) {
      const updatedUser: User = {
        ...this.editUserForm.value,
        id: this.userId
      };

      this.usersService.updateUser(updatedUser).subscribe(() => {
        this.onCancelled()
      });
    }
  }

  onCancelled() {
    this.editUserForm.reset();
    this.cancelled.emit();
    this.router.navigate(['/dashboard/users']);
  }

  get usernameControl(){
  return this.editUserForm.get('username');
  }
  get isUsernameInvalid(){
    return this.usernameControl?.touched && this.usernameControl?.invalid;
  }
  get emailControl(){
    return this.editUserForm.get('email');
  }
  get isEmailInvalid(){
    return this.emailControl?.touched && this.emailControl?.invalid;
  }
  get passwordControl(){
    return this.editUserForm.get('password');
  }

  get isPasswordInvalid(): boolean {
    console.log('touched:', this.passwordControl?.touched);
    console.log('errors:', this.passwordErrorsList);
    return !!(this.passwordControl?.touched && this.passwordErrorsList.length > 0);
  }

  get passwordErrorsList(): string[] {
    const errors = this.passwordControl?.errors?.['strongPassword'];

    if (!errors) return [];

    const messages: string[] = [];

    if (!errors.hasUpperCase) messages.push('Password must have an uppercase letter');
    if (!errors.hasLowerCase) messages.push('Password must have a lowercase letter');
    if (!errors.hasNumber) messages.push('Password must have at least 1 number');
    if (!errors.hasSpecialCharacter) messages.push('Password must have a special character (!@#$%^&* etc)');

    return messages;
  }
}
