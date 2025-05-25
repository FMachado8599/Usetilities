import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { UsersService } from '../../../core/services/users.service';
import { User } from '../../../core/interfaces/users-interface';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit {
  
  registerForm!: FormGroup;
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private userService: UsersService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      isAdmin: [false],
    });
  }

  

  submit() {
    if (this.registerForm.valid) {
      const newUser: User = {
        ...this.registerForm.value,
        isAdmin: false,
      };

      this.userService.registerUser(newUser).subscribe({
        next: () => {
          this.router.navigate(['/login']);
        },
        error: () => {
          this.errorMessage = 'Ocurrió un error al registrar el usuario.';
        }
      });
    } else {
      this.registerForm.markAllAsTouched();
    }
  }
}
