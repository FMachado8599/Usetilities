import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['',[Validators.required, Validators.minLength(3)]],
    });
    console.log('Formulario inicializado:', this.loginForm);
  }
  submit(){
    if (this.loginForm.valid) {
      console.log('Submit ejecutado', this.loginForm.value);
      const {email, password } = this.loginForm.value;
  
      const logged = this.authService.login(email, password);
      if (logged) {
        this.router.navigate(['/dashboard']);
      }
    }
  }
}




